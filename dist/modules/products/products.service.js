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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    productsRepo;
    constructor(productsRepo) {
        this.productsRepo = productsRepo;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, category } = pagination;
        const qb = this.productsRepo.createQueryBuilder('product');
        if (search) {
            qb.where('product.name ILIKE :search OR product.description ILIKE :search', {
                search: `%${search}%`,
            });
        }
        if (category) {
            qb.andWhere('product.category = :category', { category });
        }
        qb.orderBy('product.created_at', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        const [data, total] = await qb.getManyAndCount();
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const product = await this.productsRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException(`Product #${id} not found`);
        return product;
    }
    async create(dto) {
        const product = this.productsRepo.create(dto);
        return this.productsRepo.save(product);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.productsRepo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.productsRepo.delete(id);
        return { message: 'Product deleted successfully' };
    }
    async getStats() {
        const total = await this.productsRepo.count();
        const active = await this.productsRepo.count({ where: { is_active: true } });
        const outOfStock = await this.productsRepo.count({
            where: { stock_status: 'Out of Stock' },
        });
        return { total, active, outOfStock };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map