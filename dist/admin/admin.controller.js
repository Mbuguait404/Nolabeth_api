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
exports.AdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const events_service_1 = require("../modules/events/events.service");
const clients_service_1 = require("../modules/clients/clients.service");
const blogs_service_1 = require("../modules/blogs/blogs.service");
const products_service_1 = require("../modules/products/products.service");
let AdminController = class AdminController {
    eventsService;
    clientsService;
    blogsService;
    productsService;
    constructor(eventsService, clientsService, blogsService, productsService) {
        this.eventsService = eventsService;
        this.clientsService = clientsService;
        this.blogsService = blogsService;
        this.productsService = productsService;
    }
    async getOverview() {
        const [events, clients, blogs, products] = await Promise.all([
            this.eventsService.getStats(),
            this.clientsService.getStats(),
            this.blogsService.getStats(),
            this.productsService.getStats(),
        ]);
        return {
            eventsCount: events,
            clientsCount: clients,
            blogsCount: blogs,
            productsCount: products,
            generated_at: new Date().toISOString(),
        };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('overview'),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin dashboard overview statistics' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getOverview", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/v1/admin'),
    __metadata("design:paramtypes", [events_service_1.EventsService,
        clients_service_1.ClientsService,
        blogs_service_1.BlogsService,
        products_service_1.ProductsService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map