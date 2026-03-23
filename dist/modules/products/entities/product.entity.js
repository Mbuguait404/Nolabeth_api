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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.StockStatus = exports.ProductBadge = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
var ProductBadge;
(function (ProductBadge) {
    ProductBadge["NEW"] = "New";
    ProductBadge["BESTSELLER"] = "Bestseller";
    ProductBadge["POPULAR"] = "Popular";
    ProductBadge["DIGITAL"] = "Digital";
})(ProductBadge || (exports.ProductBadge = ProductBadge = {}));
var StockStatus;
(function (StockStatus) {
    StockStatus["IN_STOCK"] = "In Stock";
    StockStatus["OUT_OF_STOCK"] = "Out of Stock";
    StockStatus["LOW_STOCK"] = "Low Stock";
})(StockStatus || (exports.StockStatus = StockStatus = {}));
let Product = class Product {
    id;
    name;
    description;
    price_kes;
    category;
    image_url;
    badge;
    stock_status;
    rating;
    review_count;
    features;
    details;
    is_active;
    created_at;
    updated_at;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, price_kes: { required: true, type: () => Number }, category: { required: true, type: () => String }, image_url: { required: true, type: () => String }, badge: { required: true, enum: require("./product.entity").ProductBadge }, stock_status: { required: true, enum: require("./product.entity").StockStatus }, rating: { required: true, type: () => Number }, review_count: { required: true, type: () => Number }, features: { required: true, type: () => [String] }, details: { required: true, type: () => String }, is_active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Product.prototype, "price_kes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ProductBadge, nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "badge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StockStatus, default: StockStatus.IN_STOCK }),
    __metadata("design:type", String)
], Product.prototype, "stock_status", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 3, scale: 1, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "review_count", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "updated_at", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)('products')
], Product);
//# sourceMappingURL=product.entity.js.map