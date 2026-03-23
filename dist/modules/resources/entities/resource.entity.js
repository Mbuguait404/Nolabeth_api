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
exports.Resource = exports.ResourceType = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
var ResourceType;
(function (ResourceType) {
    ResourceType["PDF"] = "PDF";
    ResourceType["VIDEO"] = "Video";
    ResourceType["AUDIO"] = "Audio";
    ResourceType["EBOOK"] = "E-Book";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
let Resource = class Resource {
    id;
    title;
    description;
    type;
    file_url;
    size_info;
    category;
    is_active;
    created_at;
    updated_at;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, type: { required: true, enum: require("./resource.entity").ResourceType }, file_url: { required: true, type: () => String }, size_info: { required: true, type: () => String }, category: { required: true, type: () => String }, is_active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.Resource = Resource;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Resource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resource.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ResourceType }),
    __metadata("design:type", String)
], Resource.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resource.prototype, "file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "size_info", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Resource.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Resource.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Resource.prototype, "updated_at", void 0);
exports.Resource = Resource = __decorate([
    (0, typeorm_1.Entity)('resources')
], Resource);
//# sourceMappingURL=resource.entity.js.map