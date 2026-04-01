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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./schemas/event.schema");
let EventsService = class EventsService {
    eventModel;
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async findAll(pagination) {
        const { page = 1, limit = 20, search } = pagination;
        const skip = (page - 1) * limit;
        const query = {};
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        const [data, total] = await Promise.all([
            this.eventModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
            this.eventModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(idOrSlug) {
        let event;
        if (mongoose_2.Types.ObjectId.isValid(idOrSlug)) {
            event = await this.eventModel.findById(idOrSlug).exec();
        }
        else {
            event = await this.eventModel.findOne({ slug: idOrSlug }).exec();
        }
        if (!event)
            throw new common_1.NotFoundException(`Event "${idOrSlug}" not found`);
        return event;
    }
    async create(dto) {
        if (dto.slug) {
            const exists = await this.eventModel.findOne({ slug: dto.slug }).exec();
            if (exists)
                throw new common_1.ConflictException(`Slug "${dto.slug}" already in use`);
        }
        const event = new this.eventModel(dto);
        return event.save();
    }
    async update(id, dto) {
        const event = await this.eventModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        if (!event)
            throw new common_1.NotFoundException(`Event #${id} not found`);
        return event;
    }
    async remove(id) {
        const result = await this.eventModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException(`Event #${id} not found`);
        return { message: 'Event deleted successfully' };
    }
    async getStats() {
        const total = await this.eventModel.countDocuments().exec();
        const upcoming = await this.eventModel.countDocuments({ status: event_schema_1.EventStatus.UPCOMING }).exec();
        const past = await this.eventModel.countDocuments({ status: event_schema_1.EventStatus.PAST }).exec();
        return { total, upcoming, past };
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.MyEvent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
//# sourceMappingURL=events.service.js.map