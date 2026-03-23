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
exports.ClientSchema = exports.Client = exports.ClientStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const client_entity_1 = require("../entities/client.entity");
var ClientStatus;
(function (ClientStatus) {
    ClientStatus["NEW"] = "New";
    ClientStatus["IN_PROGRESS"] = "In-Progress";
    ClientStatus["COMPLETED"] = "Completed";
    ClientStatus["CANCELLED"] = "Cancelled";
})(ClientStatus || (exports.ClientStatus = ClientStatus = {}));
let Client = class Client {
    full_name;
    email;
    phone_number;
    inquiry_type;
    status;
    source;
    notes;
    last_contacted_at;
};
exports.Client = Client;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Client.prototype, "full_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Client.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: client_entity_1.InquiryType, default: client_entity_1.InquiryType.GENERAL }),
    __metadata("design:type", String)
], Client.prototype, "inquiry_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ClientStatus, default: ClientStatus.NEW }),
    __metadata("design:type", String)
], Client.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Date)
], Client.prototype, "last_contacted_at", void 0);
exports.Client = Client = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Client);
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(Client);
//# sourceMappingURL=client.schema.js.map