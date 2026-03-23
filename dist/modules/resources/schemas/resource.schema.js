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
exports.ResourceSchema = exports.Resource = exports.ResourceType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var ResourceType;
(function (ResourceType) {
    ResourceType["PDF"] = "PDF";
    ResourceType["VIDEO"] = "Video";
    ResourceType["AUDIO"] = "Audio";
    ResourceType["EBOOK"] = "E-Book";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
let Resource = class Resource {
    title;
    description;
    type;
    file_url;
    size_info;
    category;
    is_active;
};
exports.Resource = Resource;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Resource.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Resource.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ResourceType, required: true }),
    __metadata("design:type", String)
], Resource.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Resource.prototype, "file_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "size_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Resource.prototype, "is_active", void 0);
exports.Resource = Resource = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Resource);
exports.ResourceSchema = mongoose_1.SchemaFactory.createForClass(Resource);
//# sourceMappingURL=resource.schema.js.map