"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const blog_post_entity_1 = require("./entities/blog-post.entity");
let BlogsService = class BlogsService {
    blogsRepo;
    constructor(blogsRepo) {
        this.blogsRepo = blogsRepo;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, category } = pagination;
        const qb = this.blogsRepo.createQueryBuilder('post');
        if (search) {
            qb.where('post.title ILIKE :search OR post.excerpt ILIKE :search', {
                search: `%${search}%`,
            });
        }
        if (category) {
            qb.andWhere('post.category = :category', { category });
        }
        qb.orderBy('post.created_at', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        const [data, total] = await qb.getManyAndCount();
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const post = await this.blogsRepo.findOne({ where: { id } });
        if (!post)
            throw new common_1.NotFoundException(`Blog post #${id} not found`);
        return post;
    }
    async findBySlug(slug) {
        const post = await this.blogsRepo.findOne({ where: { slug } });
        if (!post)
            throw new common_1.NotFoundException(`Blog post with slug "${slug}" not found`);
        return post;
    }
    async create(dto) {
        if (dto.slug) {
            const exists = await this.blogsRepo.findOne({ where: { slug: dto.slug } });
            if (exists)
                throw new common_1.ConflictException(`Slug "${dto.slug}" already in use`);
        }
        const post = this.blogsRepo.create(dto);
        return this.blogsRepo.save(post);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.blogsRepo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.blogsRepo.delete(id);
        return { message: 'Blog post deleted successfully' };
    }
    async getStats() {
        const total = await this.blogsRepo.count();
        const published = await this.blogsRepo.count({ where: { is_published: true } });
        const featured = await this.blogsRepo.count({ where: { is_featured: true } });
        return { total, published, drafts: total - published, featured };
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_post_entity_1.BlogPost)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map