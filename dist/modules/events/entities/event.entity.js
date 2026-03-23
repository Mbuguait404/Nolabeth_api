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
exports.Event = exports.EventCategory = exports.EventStatus = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
var EventStatus;
(function (EventStatus) {
    EventStatus["UPCOMING"] = "Upcoming";
    EventStatus["PAST"] = "Past";
    EventStatus["CANCELLED"] = "Cancelled";
})(EventStatus || (exports.EventStatus = EventStatus = {}));
var EventCategory;
(function (EventCategory) {
    EventCategory["COHORT"] = "Cohort Program";
    EventCategory["WORKSHOP"] = "Workshop";
    EventCategory["VIRTUAL"] = "Virtual Workshop";
    EventCategory["AWARENESS"] = "Awareness";
})(EventCategory || (exports.EventCategory = EventCategory = {}));
let Event = class Event {
    id;
    title;
    date;
    time_range;
    location;
    description;
    long_description;
    capacity;
    price_kes;
    image_url;
    status;
    category;
    features;
    organizer_name;
    organizer_role;
    registrations_count;
    created_at;
    updated_at;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, title: { required: true, type: () => String }, date: { required: true, type: () => String }, time_range: { required: true, type: () => String }, location: { required: true, type: () => String }, description: { required: true, type: () => String }, long_description: { required: true, type: () => String }, capacity: { required: true, type: () => Number }, price_kes: { required: true, type: () => String }, image_url: { required: true, type: () => String }, status: { required: true, enum: require("./event.entity").EventStatus }, category: { required: true, enum: require("./event.entity").EventCategory }, features: { required: true, type: () => [String] }, organizer_name: { required: true, type: () => String }, organizer_role: { required: true, type: () => String }, registrations_count: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.Event = Event;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "time_range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "long_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "price_kes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EventStatus, default: EventStatus.UPCOMING }),
    __metadata("design:type", String)
], Event.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EventCategory, nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, default: [] }),
    __metadata("design:type", Array)
], Event.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "organizer_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "organizer_role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "registrations_count", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "updated_at", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('events')
], Event);
//# sourceMappingURL=event.entity.js.map