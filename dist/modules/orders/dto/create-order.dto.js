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
exports.UpdateOrderStatusDto = exports.CreateOrderDto = exports.OrderItemDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class OrderItemDto {
    id;
    name;
    price;
    quantity;
    image;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, image: { required: true, type: () => String } };
    }
}
exports.OrderItemDto = OrderItemDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "image", void 0);
class CreateOrderDto {
    user_info;
    items;
    total_amount;
    payment_method;
    static _OPENAPI_METADATA_FACTORY() {
        return { user_info: { required: true, type: () => ({ firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, address: { required: true, type: () => String }, city: { required: true, type: () => String }, postalCode: { required: true, type: () => String } }) }, items: { required: true, type: () => [require("./create-order.dto").OrderItemDto] }, total_amount: { required: true, type: () => Number }, payment_method: { required: true, type: () => String } };
    }
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateOrderDto.prototype, "user_info", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OrderItemDto),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "total_amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "payment_method", void 0);
class UpdateOrderStatusDto {
    status;
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String } };
    }
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "status", void 0);
//# sourceMappingURL=create-order.dto.js.map