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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_schema_1 = require("./schemas/client.schema");
let ClientsService = class ClientsService {
    clientModel;
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, status } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.$or = [
                { full_name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { phone_number: { $regex: search, $options: 'i' } },
            ];
        }
        if (status) {
            query.status = status;
        }
        const [data, total] = await Promise.all([
            this.clientModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
            this.clientModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const client = await this.clientModel.findById(id).exec();
        if (!client)
            throw new common_1.NotFoundException(`Client #${id} not found`);
        return client;
    }
    async create(dto) {
        const client = new this.clientModel(dto);
        return client.save();
    }
    async update(id, dto) {
        const client = await this.clientModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!client)
            throw new common_1.NotFoundException(`Client #${id} not found`);
        return client;
    }
    async remove(id) {
        const result = await this.clientModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Client record deleted successfully`);
        return { message: 'Client record deleted successfully' };
    }
    async getStats() {
        const total = await this.clientModel.countDocuments().exec();
        const newLeads = await this.clientModel.countDocuments({ status: client_schema_1.ClientStatus.NEW }).exec();
        const inProgress = await this.clientModel.countDocuments({ status: client_schema_1.ClientStatus.IN_PROGRESS }).exec();
        const completed = await this.clientModel.countDocuments({ status: client_schema_1.ClientStatus.COMPLETED }).exec();
        return { total, newLeads, inProgress, completed };
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientsService);
//# sourceMappingURL=clients.service.js.map