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
exports.BlogPost = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let BlogPost = class BlogPost {
    id;
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
    created_at;
    updated_at;
    generateSlug() {
        if (this.title && !this.slug) {
            this.slug = this.title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim();
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, slug: { required: true, type: () => String }, author_name: { required: true, type: () => String }, published_date: { required: true, type: () => String }, read_time: { required: true, type: () => String }, category: { required: true, type: () => String }, excerpt: { required: true, type: () => String }, content_rich_text: { required: true, type: () => String }, featured_image_url: { required: true, type: () => String }, is_featured: { required: true, type: () => Boolean }, is_published: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.BlogPost = BlogPost;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlogPost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogPost.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogPost.prototype, "author_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "published_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "read_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "excerpt", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], BlogPost.prototype, "content_rich_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BlogPost.prototype, "featured_image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BlogPost.prototype, "is_featured", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BlogPost.prototype, "is_published", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlogPost.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlogPost.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogPost.prototype, "generateSlug", null);
exports.BlogPost = BlogPost = __decorate([
    (0, typeorm_1.Entity)('blog_posts')
], BlogPost);
//# sourceMappingURL=blog-post.entity.js.map