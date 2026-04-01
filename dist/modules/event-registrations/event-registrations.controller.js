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
exports.EventRegistrationsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const event_registrations_service_1 = require("./event-registrations.service");
const create_event_registration_dto_1 = require("./dto/create-event-registration.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let EventRegistrationsController = class EventRegistrationsController {
    eventRegistrationsService;
    constructor(eventRegistrationsService) {
        this.eventRegistrationsService = eventRegistrationsService;
    }
    async create(createRegistrationDto) {
        return this.eventRegistrationsService.create(createRegistrationDto);
    }
    async findAll() {
        return this.eventRegistrationsService.findAll();
    }
    async findByEvent(eventId) {
        return this.eventRegistrationsService.findByEvent(eventId);
    }
    async findOne(id) {
        return this.eventRegistrationsService.findOne(id);
    }
    async updateStatus(id, updateStatusDto) {
        return this.eventRegistrationsService.updateStatus(id, updateStatusDto);
    }
};
exports.EventRegistrationsController = EventRegistrationsController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_registration_dto_1.CreateEventRegistrationDto]),
    __metadata("design:returntype", Promise)
], EventRegistrationsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventRegistrationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('event/:eventId'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventRegistrationsController.prototype, "findByEvent", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventRegistrationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id/status'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_event_registration_dto_1.UpdateRegistrationStatusDto]),
    __metadata("design:returntype", Promise)
], EventRegistrationsController.prototype, "updateStatus", null);
exports.EventRegistrationsController = EventRegistrationsController = __decorate([
    (0, common_1.Controller)('api/v1/event-registrations'),
    __metadata("design:paramtypes", [event_registrations_service_1.EventRegistrationsService])
], EventRegistrationsController);
//# sourceMappingURL=event-registrations.controller.js.map