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
exports.EventSchema = exports.MyEvent = exports.EventCategory = exports.EventStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
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
let MyEvent = class MyEvent {
    title;
    slug;
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
};
exports.MyEvent = MyEvent;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "time_range", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MyEvent.prototype, "long_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MyEvent.prototype, "capacity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "price_kes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "image_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: EventStatus, default: EventStatus.UPCOMING }),
    __metadata("design:type", String)
], MyEvent.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: EventCategory, nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], MyEvent.prototype, "features", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "organizer_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], MyEvent.prototype, "organizer_role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], MyEvent.prototype, "registrations_count", void 0);
exports.MyEvent = MyEvent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
        collection: 'events'
    })
], MyEvent);
exports.EventSchema = mongoose_1.SchemaFactory.createForClass(MyEvent);
exports.EventSchema.pre('save', function (next) {
    if (this.title && !this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    }
    next();
});
//# sourceMappingURL=event.schema.js.map