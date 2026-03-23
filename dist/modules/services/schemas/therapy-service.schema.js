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
exports.TherapyServiceSchema = exports.TherapyService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let TherapyService = class TherapyService {
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
};
exports.TherapyService = TherapyService;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TherapyService.prototype, "long_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], TherapyService.prototype, "features", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], TherapyService.prototype, "benefits", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "icon_identifier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "image_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TherapyService.prototype, "priority_order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], TherapyService.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], TherapyService.prototype, "color_class", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ title: String, description: String }], nullable: true }),
    __metadata("design:type", Array)
], TherapyService.prototype, "process_steps", void 0);
exports.TherapyService = TherapyService = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], TherapyService);
exports.TherapyServiceSchema = mongoose_1.SchemaFactory.createForClass(TherapyService);
//# sourceMappingURL=therapy-service.schema.js.map