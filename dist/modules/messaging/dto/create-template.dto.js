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
exports.CreateTemplateDto = exports.MessageChannel = exports.TemplateCategory = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var TemplateCategory;
(function (TemplateCategory) {
    TemplateCategory["SECURITY"] = "security";
    TemplateCategory["MARKETING"] = "marketing";
    TemplateCategory["ONBOARDING"] = "Onboarding";
    TemplateCategory["NOTIFICATIONS"] = "notifications";
    TemplateCategory["TRANSACTIONAL"] = "transactional";
})(TemplateCategory || (exports.TemplateCategory = TemplateCategory = {}));
var MessageChannel;
(function (MessageChannel) {
    MessageChannel["EMAIL"] = "email";
    MessageChannel["SMS"] = "sms";
})(MessageChannel || (exports.MessageChannel = MessageChannel = {}));
class CreateTemplateDto {
    name;
    channel;
    category;
    content;
    subject;
    description;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, channel: { required: true, enum: require("./create-template.dto").MessageChannel }, category: { required: true, enum: require("./create-template.dto").TemplateCategory }, content: { required: true, type: () => String }, subject: { required: false, type: () => String }, description: { required: false, type: () => String } };
    }
}
exports.CreateTemplateDto = CreateTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: MessageChannel }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(MessageChannel),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "channel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: TemplateCategory }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(TemplateCategory),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "description", void 0);
//# sourceMappingURL=create-template.dto.js.map