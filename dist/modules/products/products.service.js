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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("./schemas/product.schema");
let ProductsService = class ProductsService {
    productModel;
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, category } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }
        if (category) {
            query.category = category;
        }
        const [data, total] = await Promise.all([
            this.productModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
            this.productModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(idOrSlug) {
        let product;
        if (mongoose_2.Types.ObjectId.isValid(idOrSlug)) {
            product = await this.productModel.findById(idOrSlug).exec();
        }
        else {
            product = await this.productModel.findOne({ slug: idOrSlug }).exec();
        }
        if (!product)
            throw new common_1.NotFoundException(`Product "${idOrSlug}" not found`);
        return product;
    }
    async create(dto) {
        if (dto.slug) {
            const existing = await this.productModel.findOne({ slug: dto.slug }).exec();
            if (existing)
                throw new common_1.ConflictException(`Slug "${dto.slug}" already in use`);
        }
        const product = new this.productModel(dto);
        return product.save();
    }
    async update(id, dto) {
        const product = await this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!product)
            throw new common_1.NotFoundException(`Product #${id} not found`);
        return product;
    }
    async remove(id) {
        const result = await this.productModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Product #${id} not found`);
        return { message: 'Product deleted successfully' };
    }
    async getStats() {
        const total = await this.productModel.countDocuments().exec();
        const active = await this.productModel.countDocuments({ is_active: true }).exec();
        const outOfStock = await this.productModel.countDocuments({ stock_status: product_schema_1.StockStatus.OUT_OF_STOCK }).exec();
        return { total, active, outOfStock };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map