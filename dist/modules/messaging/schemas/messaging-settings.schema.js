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
exports.MessagingSettingsSchema = exports.MessagingSettings = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MessagingSettings = class MessagingSettings {
    base_url;
    api_key;
    use_default;
};
exports.MessagingSettings = MessagingSettings;
__decorate([
    (0, mongoose_1.Prop)({ default: 'https://smsapi.solby.io:8443' }),
    __metadata("design:type", String)
], MessagingSettings.prototype, "base_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'nk_c7d28a99b9f96ab4c2aaaa6a62be16f0d4db06e040ea55af2a2b047d8a7ecf37' }),
    __metadata("design:type", String)
], MessagingSettings.prototype, "api_key", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], MessagingSettings.prototype, "use_default", void 0);
exports.MessagingSettings = MessagingSettings = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], MessagingSettings);
exports.MessagingSettingsSchema = mongoose_1.SchemaFactory.createForClass(MessagingSettings);
//# sourceMappingURL=messaging-settings.schema.js.map