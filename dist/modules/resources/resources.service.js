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
exports.ResourcesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const resource_schema_1 = require("./schemas/resource.schema");
let ResourcesService = class ResourcesService {
    resourceModel;
    constructor(resourceModel) {
        this.resourceModel = resourceModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, type, category } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (type)
            query.type = type;
        if (category)
            query.category = category;
        const [data, total] = await Promise.all([
            this.resourceModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
            this.resourceModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const resource = await this.resourceModel.findById(id).exec();
        if (!resource)
            throw new common_1.NotFoundException(`Resource #${id} not found`);
        return resource;
    }
    async create(dto) {
        const resource = new this.resourceModel(dto);
        return resource.save();
    }
    async update(id, dto) {
        const resource = await this.resourceModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!resource)
            throw new common_1.NotFoundException(`Resource #${id} not found`);
        return resource;
    }
    async remove(id) {
        const result = await this.resourceModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Resource #${id} not found`);
        return { message: 'Resource deleted successfully' };
    }
};
exports.ResourcesService = ResourcesService;
exports.ResourcesService = ResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(resource_schema_1.Resource.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ResourcesService);
//# sourceMappingURL=resources.service.js.map