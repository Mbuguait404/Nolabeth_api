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
exports.UpdateBlogPostDto = exports.CreateBlogPostDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateBlogPostDto {
    title;
    slug;
    author_name;
    published_date;
    read_time;
    category;
    excerpt;
    content_rich_text;
    featured_image_url;
    is_featured;
    is_published;
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, slug: { required: false, type: () => String }, author_name: { required: true, type: () => String }, published_date: { required: false, type: () => String }, read_time: { required: false, type: () => String }, category: { required: false, type: () => String }, excerpt: { required: false, type: () => String }, content_rich_text: { required: true, type: () => String }, featured_image_url: { required: false, type: () => String }, is_featured: { required: false, type: () => Boolean }, is_published: { required: false, type: () => Boolean } };
    }
}
exports.CreateBlogPostDto = CreateBlogPostDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "author_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "published_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "read_time", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "excerpt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "content_rich_text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBlogPostDto.prototype, "featured_image_url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBlogPostDto.prototype, "is_featured", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBlogPostDto.prototype, "is_published", void 0);
class UpdateBlogPostDto extends (0, mapped_types_1.PartialType)(CreateBlogPostDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBlogPostDto = UpdateBlogPostDto;
//# sourceMappingURL=blog-post.dto.js.map