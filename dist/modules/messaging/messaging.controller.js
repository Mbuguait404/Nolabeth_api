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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const messaging_service_1 = require("./messaging.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const admin_user_entity_1 = require("../../auth/entities/admin-user.entity");
const swagger_1 = require("@nestjs/swagger");
const create_template_dto_1 = require("./dto/create-template.dto");
const update_template_dto_1 = require("./dto/update-template.dto");
let MessagingController = class MessagingController {
    messagingService;
    constructor(messagingService) {
        this.messagingService = messagingService;
    }
    async send(data) {
        return this.messagingService.sendNotification(data);
    }
    async getLogs(query) {
        return this.messagingService.getLogs(query);
    }
    async getTemplates() {
        return this.messagingService.getTemplates();
    }
    async createTemplate(data) {
        return this.messagingService.createTemplate(data);
    }
    async updateTemplate(id, data) {
        return this.messagingService.updateTemplate(id, data);
    }
    async deleteTemplate(id) {
        return this.messagingService.deleteTemplate(id);
    }
    async getStats() {
        return this.messagingService.getStats();
    }
    async getSettings() {
        return this.messagingService.getMessagingSettings();
    }
    async updateSettings(data) {
        return this.messagingService.updateMessagingSettings(data);
    }
};
exports.MessagingController = MessagingController;
__decorate([
    (0, common_1.Post)('send'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Send a notification' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "send", null);
__decorate([
    (0, common_1.Get)('logs'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get message logs' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "getLogs", null);
__decorate([
    (0, common_1.Get)('templates'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get all templates' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "getTemplates", null);
__decorate([
    (0, common_1.Post)('templates'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Create a template' }),
    (0, swagger_1.ApiBody)({ type: create_template_dto_1.CreateTemplateDto }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "createTemplate", null);
__decorate([
    (0, common_1.Put)('templates/:id'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update a template' }),
    (0, swagger_1.ApiBody)({ type: update_template_dto_1.UpdateTemplateDto }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_template_dto_1.UpdateTemplateDto]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "updateTemplate", null);
__decorate([
    (0, common_1.Delete)('templates/:id'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a template' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "deleteTemplate", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get usage stats' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('settings'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Get messaging settings' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "getSettings", null);
__decorate([
    (0, common_1.Put)('settings'),
    (0, roles_decorator_1.Roles)(admin_user_entity_1.AdminRole.ADMIN, admin_user_entity_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update messaging settings' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagingController.prototype, "updateSettings", null);
exports.MessagingController = MessagingController = __decorate([
    (0, swagger_1.ApiTags)('Messaging'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('api/v1/messaging'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [messaging_service_1.MessagingService])
], MessagingController);
//# sourceMappingURL=messaging.controller.js.map