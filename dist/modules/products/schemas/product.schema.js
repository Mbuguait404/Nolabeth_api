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
exports.ProductSchema = exports.Product = exports.StockStatus = exports.ProductBadge = void 0;
const mongoose_1 = require("@nestjs/mongoose");
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
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price_kes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ProductBadge, nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "badge", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: StockStatus, default: StockStatus.IN_STOCK }),
    __metadata("design:type", String)
], Product.prototype, "stock_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "review_count", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Product.prototype, "features", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Product.prototype, "details", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "is_active", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map