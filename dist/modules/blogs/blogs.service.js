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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const blog_post_schema_1 = require("./schemas/blog-post.schema");
let BlogsService = class BlogsService {
    blogModel;
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, category } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
            ];
        }
        if (category) {
            query.category = category;
        }
        const [data, total] = await Promise.all([
            this.blogModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
            this.blogModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(idOrSlug) {
        let post;
        if (mongoose_2.Types.ObjectId.isValid(idOrSlug)) {
            post = await this.blogModel.findById(idOrSlug).exec();
        }
        else {
            post = await this.blogModel.findOne({ slug: idOrSlug }).exec();
        }
        if (!post)
            throw new common_1.NotFoundException(`Blog post "${idOrSlug}" not found`);
        return post;
    }
    async findBySlug(slug) {
        const post = await this.blogModel.findOne({ slug }).exec();
        if (!post)
            throw new common_1.NotFoundException(`Blog post with slug "${slug}" not found`);
        return post;
    }
    async create(dto) {
        if (dto.slug) {
            const exists = await this.blogModel.findOne({ slug: dto.slug }).exec();
            if (exists)
                throw new common_1.ConflictException(`Slug "${dto.slug}" already in use`);
        }
        const post = new this.blogModel(dto);
        return post.save();
    }
    async update(id, dto) {
        const post = await this.blogModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!post)
            throw new common_1.NotFoundException(`Blog post #${id} not found`);
        return post;
    }
    async remove(id) {
        const result = await this.blogModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Blog post #${id} not found`);
        return { message: 'Blog post deleted successfully' };
    }
    async getStats() {
        const total = await this.blogModel.countDocuments().exec();
        const published = await this.blogModel.countDocuments({ is_published: true }).exec();
        const featured = await this.blogModel.countDocuments({ is_featured: true }).exec();
        return { total, published, drafts: total - published, featured };
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_post_schema_1.BlogPost.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map