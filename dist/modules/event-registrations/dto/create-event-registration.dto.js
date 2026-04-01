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
exports.UpdateRegistrationStatusDto = exports.CreateEventRegistrationDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEventRegistrationDto {
    event_id;
    full_name;
    email;
    phone_number;
    country;
    payment_method;
    additional_details;
    static _OPENAPI_METADATA_FACTORY() {
        return { event_id: { required: true, type: () => String }, full_name: { required: true, type: () => String }, email: { required: true, type: () => String, format: "email" }, phone_number: { required: true, type: () => String }, country: { required: true, type: () => String }, payment_method: { required: true, type: () => String }, additional_details: { required: true, type: () => Object } };
    }
}
exports.CreateEventRegistrationDto = CreateEventRegistrationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "event_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventRegistrationDto.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEventRegistrationDto.prototype, "additional_details", void 0);
class UpdateRegistrationStatusDto {
    status;
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String } };
    }
}
exports.UpdateRegistrationStatusDto = UpdateRegistrationStatusDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['Pending', 'Confirmed', 'Cancelled', 'Completed']),
    __metadata("design:type", String)
], UpdateRegistrationStatusDto.prototype, "status", void 0);
//# sourceMappingURL=create-event-registration.dto.js.map