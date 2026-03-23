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
exports.UpdateClientDto = exports.CreateClientDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const client_entity_1 = require("../entities/client.entity");
const client_schema_1 = require("../schemas/client.schema");
class CreateClientDto {
    full_name;
    email;
    phone_number;
    inquiry_type;
    notes;
    source;
    static _OPENAPI_METADATA_FACTORY() {
        return { full_name: { required: true, type: () => String }, email: { required: true, type: () => String, format: "email" }, phone_number: { required: false, type: () => String }, inquiry_type: { required: false, enum: require("../entities/client.entity").InquiryType }, notes: { required: false, type: () => String }, source: { required: false, type: () => String } };
    }
}
exports.CreateClientDto = CreateClientDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_entity_1.InquiryType),
    __metadata("design:type", String)
], CreateClientDto.prototype, "inquiry_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClientDto.prototype, "source", void 0);
class UpdateClientDto extends (0, mapped_types_1.PartialType)(CreateClientDto) {
    status;
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: false, enum: require("../schemas/client.schema").ClientStatus } };
    }
}
exports.UpdateClientDto = UpdateClientDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_schema_1.ClientStatus),
    __metadata("design:type", String)
], UpdateClientDto.prototype, "status", void 0);
//# sourceMappingURL=client.dto.js.map