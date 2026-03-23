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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const therapy_service_schema_1 = require("./schemas/therapy-service.schema");
let ServicesService = class ServicesService {
    serviceModel;
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 50, search } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        const [data, total] = await Promise.all([
            this.serviceModel.find(query).sort({ priority_order: 1, created_at: 1 }).skip(skip).limit(limit).exec(),
            this.serviceModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const service = await this.serviceModel.findById(id).exec();
        if (!service)
            throw new common_1.NotFoundException(`Service #${id} not found`);
        return service;
    }
    async create(dto) {
        const service = new this.serviceModel(dto);
        return service.save();
    }
    async update(id, dto) {
        const service = await this.serviceModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!service)
            throw new common_1.NotFoundException(`Service #${id} not found`);
        return service;
    }
    async remove(id) {
        const result = await this.serviceModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Service #${id} not found`);
        return { message: 'Service deleted successfully' };
    }
    async reorder(orderedIds) {
        const updates = orderedIds.map((id, index) => this.serviceModel.findByIdAndUpdate(id, { priority_order: index }).exec());
        await Promise.all(updates);
        return { message: 'Services reordered successfully' };
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(therapy_service_schema_1.TherapyService.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServicesService);
//# sourceMappingURL=services.service.js.map