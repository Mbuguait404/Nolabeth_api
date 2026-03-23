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
exports.Client = exports.ClientStatus = exports.InquiryType = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
var InquiryType;
(function (InquiryType) {
    InquiryType["COUNSELING"] = "Counseling";
    InquiryType["WORKSHOP"] = "Workshop";
    InquiryType["GENERAL"] = "General";
})(InquiryType || (exports.InquiryType = InquiryType = {}));
var ClientStatus;
(function (ClientStatus) {
    ClientStatus["NEW"] = "New";
    ClientStatus["IN_PROGRESS"] = "In-Progress";
    ClientStatus["COMPLETED"] = "Completed";
})(ClientStatus || (exports.ClientStatus = ClientStatus = {}));
let Client = class Client {
    id;
    full_name;
    email;
    phone_number;
    inquiry_type;
    notes;
    status;
    source;
    created_at;
    updated_at;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, full_name: { required: true, type: () => String }, email: { required: true, type: () => String }, phone_number: { required: true, type: () => String }, inquiry_type: { required: true, enum: require("./client.entity").InquiryType }, notes: { required: true, type: () => String }, status: { required: true, enum: require("./client.entity").ClientStatus }, source: { required: true, type: () => String }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: InquiryType, default: InquiryType.GENERAL }),
    __metadata("design:type", String)
], Client.prototype, "inquiry_type", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ClientStatus, default: ClientStatus.NEW }),
    __metadata("design:type", String)
], Client.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Client.prototype, "updated_at", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)('clients')
], Client);
//# sourceMappingURL=client.entity.js.map