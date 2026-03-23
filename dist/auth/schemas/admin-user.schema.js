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
exports.AdminUserSchema = exports.AdminUser = exports.AdminRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var AdminRole;
(function (AdminRole) {
    AdminRole["ADMIN"] = "Admin";
    AdminRole["SUPER_ADMIN"] = "SuperAdmin";
})(AdminRole || (exports.AdminRole = AdminRole = {}));
let AdminUser = class AdminUser {
    name;
    email;
    password_hash;
    role;
    last_login;
};
exports.AdminUser = AdminUser;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AdminUser.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], AdminUser.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AdminUser.prototype, "password_hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: AdminRole, default: AdminRole.ADMIN }),
    __metadata("design:type", String)
], AdminUser.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Date)
], AdminUser.prototype, "last_login", void 0);
exports.AdminUser = AdminUser = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], AdminUser);
exports.AdminUserSchema = mongoose_1.SchemaFactory.createForClass(AdminUser);
//# sourceMappingURL=admin-user.schema.js.map