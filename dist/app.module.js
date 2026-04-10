"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const throttler_1 = require("@nestjs/throttler");
const schedule_1 = require("@nestjs/schedule");
const configuration_1 = __importDefault(require("./config/configuration"));
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
const events_module_1 = require("./modules/events/events.module");
const clients_module_1 = require("./modules/clients/clients.module");
const blogs_module_1 = require("./modules/blogs/blogs.module");
const resources_module_1 = require("./modules/resources/resources.module");
const products_module_1 = require("./modules/products/products.module");
const services_module_1 = require("./modules/services/services.module");
const settings_module_1 = require("./modules/settings/settings.module");
const bookings_module_1 = require("./modules/bookings/bookings.module");
const messaging_module_1 = require("./modules/messaging/messaging.module");
const event_registrations_module_1 = require("./modules/event-registrations/event-registrations.module");
const media_module_1 = require("./modules/media/media.module");
const keep_alive_service_1 = require("./common/services/keep-alive.service");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            schedule_1.ScheduleModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60000, limit: 20 }]),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    uri: config.get('database.uri'),
                }),
            }),
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            events_module_1.EventsModule,
            clients_module_1.ClientsModule,
            blogs_module_1.BlogsModule,
            resources_module_1.ResourcesModule,
            products_module_1.ProductsModule,
            services_module_1.ServicesModule,
            settings_module_1.SettingsModule,
            bookings_module_1.BookingsModule,
            messaging_module_1.MessagingModule,
            event_registrations_module_1.EventRegistrationsModule,
            media_module_1.MediaModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        providers: [keep_alive_service_1.KeepAliveService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map