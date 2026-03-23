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
exports.TherapyService = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let TherapyService = class TherapyService {
    id;
    title;
    description;
    long_description;
    features;
    benefits;
    icon_identifier;
    image_url;
    priority_order;
    is_active;
    color_class;
    process_steps;
    created_at;
    updated_at;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, long_description: { required: true, type: () => String }, features: { required: true, type: () => [String] }, benefits: { required: true, type: () => [String] }, icon_identifier: { required: true, type: () => String }, image_url: { required: true, type: () => String }, priority_order: { required: true, type: () => Number }, is_active: { required: true, type: () => Boolean }, color_class: { required: true, type: () => String }, process_steps: { required: true }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.TherapyService = TherapyService;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TherapyService.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TherapyService.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TherapyService.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "long_description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], TherapyService.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], TherapyService.prototype, "benefits", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "icon_identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TherapyService.prototype, "priority_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TherapyService.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "color_class", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Array)
], TherapyService.prototype, "process_steps", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TherapyService.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TherapyService.prototype, "updated_at", void 0);
exports.TherapyService = TherapyService = __decorate([
    (0, typeorm_1.Entity)('services')
], TherapyService);
//# sourceMappingURL=therapy-service.entity.js.map