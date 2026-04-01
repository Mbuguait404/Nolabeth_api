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
exports.EventRegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_registration_schema_1 = require("./schemas/event-registration.schema");
const event_schema_1 = require("../events/schemas/event.schema");
let EventRegistrationsService = class EventRegistrationsService {
    registrationModel;
    eventModel;
    constructor(registrationModel, eventModel) {
        this.registrationModel = registrationModel;
        this.eventModel = eventModel;
    }
    async create(createRegistrationDto) {
        const { event_id, ...rest } = createRegistrationDto;
        const event = await this.eventModel.findById(event_id);
        if (!event) {
            throw new common_1.NotFoundException('Event not found');
        }
        const registration = new this.registrationModel({
            event_id: new mongoose_2.Types.ObjectId(event_id),
            ...rest,
        });
        const savedRegistration = await registration.save();
        await this.eventModel.findByIdAndUpdate(event_id, {
            $inc: { registrations_count: 1 }
        });
        return savedRegistration;
    }
    async findAll() {
        return this.registrationModel.find().populate('event_id').sort({ created_at: -1 }).exec();
    }
    async findByEvent(eventId) {
        const filter = { event_id: eventId };
        return this.registrationModel.find(filter).sort({ created_at: -1 }).exec();
    }
    async updateStatus(id, updateStatusDto) {
        const registration = await this.registrationModel.findByIdAndUpdate(id, { status: updateStatusDto.status }, { new: true });
        if (!registration) {
            throw new common_1.NotFoundException('Registration not found');
        }
        return registration;
    }
    async findOne(id) {
        const registration = await this.registrationModel.findById(id).populate('event_id').exec();
        if (!registration) {
            throw new common_1.NotFoundException('Registration not found');
        }
        return registration;
    }
};
exports.EventRegistrationsService = EventRegistrationsService;
exports.EventRegistrationsService = EventRegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_registration_schema_1.EventRegistration.name)),
    __param(1, (0, mongoose_1.InjectModel)(event_schema_1.MyEvent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], EventRegistrationsService);
//# sourceMappingURL=event-registrations.service.js.map