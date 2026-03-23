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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./entities/client.entity");
let ClientsService = class ClientsService {
    clientsRepo;
    constructor(clientsRepo) {
        this.clientsRepo = clientsRepo;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search, status } = pagination;
        const qb = this.clientsRepo.createQueryBuilder('client');
        if (search) {
            qb.where('client.full_name ILIKE :search OR client.email ILIKE :search', { search: `%${search}%` });
        }
        if (status) {
            qb.andWhere('client.status = :status', { status });
        }
        qb.orderBy('client.created_at', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        const [data, total] = await qb.getManyAndCount();
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(id) {
        const client = await this.clientsRepo.findOne({ where: { id } });
        if (!client)
            throw new common_1.NotFoundException(`Client #${id} not found`);
        return client;
    }
    async create(dto) {
        const client = this.clientsRepo.create(dto);
        return this.clientsRepo.save(client);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.clientsRepo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.clientsRepo.delete(id);
        return { message: 'Client record deleted successfully' };
    }
    async getStats() {
        const total = await this.clientsRepo.count();
        const newLeads = await this.clientsRepo.count({ where: { status: client_entity_1.ClientStatus.NEW } });
        const inProgress = await this.clientsRepo.count({ where: { status: client_entity_1.ClientStatus.IN_PROGRESS } });
        const completed = await this.clientsRepo.count({ where: { status: client_entity_1.ClientStatus.COMPLETED } });
        return { total, newLeads, inProgress, completed };
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map