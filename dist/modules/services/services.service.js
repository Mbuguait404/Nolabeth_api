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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const therapy_service_entity_1 = require("./entities/therapy-service.entity");
let ServicesService = class ServicesService {
    servicesRepo;
    constructor(servicesRepo) {
        this.servicesRepo = servicesRepo;
    }
    async findAll(pagination) {
        const { page = 1, limit = 50, search } = pagination;
        const where = search ? { title: (0, typeorm_2.ILike)(`%${search}%`) } : {};
        const [data, total] = await this.servicesRepo.findAndCount({
            where,
            order: { priority_order: 'ASC', created_at: 'ASC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const service = await this.servicesRepo.findOne({ where: { id } });
        if (!service)
            throw new common_1.NotFoundException(`Service #${id} not found`);
        return service;
    }
    async create(dto) {
        const service = this.servicesRepo.create(dto);
        return this.servicesRepo.save(service);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.servicesRepo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.servicesRepo.delete(id);
        return { message: 'Service deleted successfully' };
    }
    async reorder(orderedIds) {
        const updates = orderedIds.map((id, index) => this.servicesRepo.update(id, { priority_order: index }));
        await Promise.all(updates);
        return { message: 'Services reordered successfully' };
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(therapy_service_entity_1.TherapyService)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServicesService);
//# sourceMappingURL=services.service.js.map