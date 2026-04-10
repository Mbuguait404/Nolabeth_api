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
var KeepAliveService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeepAliveService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let KeepAliveService = KeepAliveService_1 = class KeepAliveService {
    logger = new common_1.Logger(KeepAliveService_1.name);
    async handleCron() {
        this.logger.log('Executing keep-alive ping to prevent server from sleeping.');
        const appUrl = process.env.RENDER_EXTERNAL_URL ||
            process.env.API_URL ||
            process.env.PUBLIC_URL ||
            `http://localhost:${process.env.PORT || 3000}`;
        try {
            const response = await fetch(appUrl);
            if (response.ok) {
                this.logger.log(`Keep-alive ping successful: ${response.status} ${response.statusText}`);
            }
            else {
                this.logger.warn(`Keep-alive ping returned non-OK status: ${response.status}`);
            }
        }
        catch (error) {
            this.logger.error(`Failed to execute keep-alive ping: ${error.message}`);
        }
    }
};
exports.KeepAliveService = KeepAliveService;
__decorate([
    (0, schedule_1.Cron)('0 */10 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KeepAliveService.prototype, "handleCron", null);
exports.KeepAliveService = KeepAliveService = KeepAliveService_1 = __decorate([
    (0, common_1.Injectable)()
], KeepAliveService);
//# sourceMappingURL=keep-alive.service.js.map