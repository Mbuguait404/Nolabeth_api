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
exports.SettingsSchema = exports.Settings = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Settings = class Settings {
    site_name;
    site_tagline;
    site_description;
    contact_email;
    contact_phone;
    contact_address;
    social_links;
    hero_title;
    hero_subtitle;
    logo_url;
    footer_text;
};
exports.Settings = Settings;
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'NOLABETH' }),
    __metadata("design:type", String)
], Settings.prototype, "site_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'Therapy & Wellness' }),
    __metadata("design:type", String)
], Settings.prototype, "site_tagline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Noble Lazuli And Beyond Therapy. Empowering your journey through compassionate, evidence-based counseling and holistic wellness.' }),
    __metadata("design:type", String)
], Settings.prototype, "site_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'lapislazulifirmfoundations@gmail.com' }),
    __metadata("design:type", String)
], Settings.prototype, "contact_email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '+254 723 298 339' }),
    __metadata("design:type", String)
], Settings.prototype, "contact_phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Mombasa - Kizingo' }),
    __metadata("design:type", String)
], Settings.prototype, "contact_address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {
            facebook: 'https://www.facebook.com/share/p/1CNvkecQDP/',
            tiktok: 'https://www.tiktok.com/@lazuli_therapy?_r=1&_t=ZS-94eEWHlWihc',
            instagram: 'https://www.instagram.com/lapis_lazuli_firmfoundations?igsh=YTYweDd3YWo4eTVl',
            youtube: 'https://m.youtube.com/channel/UCjlSoJNgU55sayUZwmAvk4Q'
        } }),
    __metadata("design:type", Object)
], Settings.prototype, "social_links", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Therapy That Inspires Full-Scale Support.' }),
    __metadata("design:type", String)
], Settings.prototype, "hero_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '"Confusion is the thief of vision. We provide a safe, non-judgmental space that inspires full-scale support and nurtures one to explore the germ within."' }),
    __metadata("design:type", String)
], Settings.prototype, "hero_subtitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '/logo/logo_rmbg.png' }),
    __metadata("design:type", String)
], Settings.prototype, "logo_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Noble Lazuli And Beyond Therapy. Empowering your journey through compassionate, evidence-based counseling and holistic wellness.' }),
    __metadata("design:type", String)
], Settings.prototype, "footer_text", void 0);
exports.Settings = Settings = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Settings);
exports.SettingsSchema = mongoose_1.SchemaFactory.createForClass(Settings);
//# sourceMappingURL=settings.schema.js.map