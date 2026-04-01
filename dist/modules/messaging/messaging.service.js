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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MessagingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = __importDefault(require("axios"));
const messaging_settings_schema_1 = require("./schemas/messaging-settings.schema");
let MessagingService = MessagingService_1 = class MessagingService {
    messagingSettingsModel;
    logger = new common_1.Logger(MessagingService_1.name);
    DEFAULT_BASE_URL = 'https://smsapi.solby.io:8443';
    DEFAULT_API_KEY = 'nk_c7d28a99b9f96ab4c2aaaa6a62be16f0d4db06e040ea55af2a2b047d8a7ecf37';
    constructor(messagingSettingsModel) {
        this.messagingSettingsModel = messagingSettingsModel;
    }
    async getSettings() {
        let settings = await this.messagingSettingsModel.findOne().exec();
        if (!settings) {
            settings = await this.messagingSettingsModel.create({
                base_url: this.DEFAULT_BASE_URL,
                api_key: this.DEFAULT_API_KEY,
                use_default: true,
            });
        }
        return settings;
    }
    async getClient() {
        const settings = await this.getSettings();
        const baseURL = settings.use_default ? this.DEFAULT_BASE_URL : settings.base_url;
        const apiKey = settings.use_default ? this.DEFAULT_API_KEY : settings.api_key;
        return axios_1.default.create({
            baseURL,
            headers: {
                'UNIFIED-API-Key': apiKey,
                'Content-Type': 'application/json',
            },
        });
    }
    async sendNotification(data) {
        try {
            const client = await this.getClient();
            const response = await client.post('/notifications/send', data);
            return response.data;
        }
        catch (error) {
            this.logger.error('Error sending notification:', error.response?.data || error.message);
            throw new common_1.InternalServerErrorException(error.response?.data?.message || 'Failed to send notification');
        }
    }
    async getLogs(params = {}) {
        try {
            const client = await this.getClient();
            const response = await client.get('/message-logs', { params });
            return response.data;
        }
        catch (error) {
            this.logger.error('Error fetching logs:', error.response?.data || error.message);
            throw new common_1.InternalServerErrorException('Failed to fetch message logs');
        }
    }
    async getTemplates() {
        try {
            const client = await this.getClient();
            const response = await client.get('/templates');
            return response.data;
        }
        catch (error) {
            this.logger.error('Error fetching templates:', error.response?.data || error.message);
            throw new common_1.InternalServerErrorException('Failed to fetch templates');
        }
    }
    async createTemplate(data) {
        try {
            const client = await this.getClient();
            const response = await client.post('/templates', data);
            return response.data;
        }
        catch (error) {
            const errorData = error.response?.data;
            this.logger.error('Error creating template:', errorData || error.message);
            const errorMessage = Array.isArray(errorData?.message)
                ? errorData.message.join(', ')
                : errorData?.message || 'Failed to create template';
            throw new common_1.InternalServerErrorException(errorMessage);
        }
    }
    async updateTemplate(id, data) {
        try {
            const client = await this.getClient();
            const response = await client.put(`/templates/${id}`, data);
            return response.data;
        }
        catch (error) {
            const errorData = error.response?.data;
            this.logger.error(`Error updating template ${id}:`, errorData || error.message);
            const errorMessage = Array.isArray(errorData?.message)
                ? errorData.message.join(', ')
                : errorData?.message || 'Failed to update template';
            throw new common_1.InternalServerErrorException(errorMessage);
        }
    }
    async deleteTemplate(id) {
        try {
            const client = await this.getClient();
            const response = await client.delete(`/templates/${id}`);
            return response.data;
        }
        catch (error) {
            const errorData = error.response?.data;
            this.logger.error(`Error deleting template ${id}:`, errorData || error.message);
            const errorMessage = Array.isArray(errorData?.message)
                ? errorData.message.join(', ')
                : errorData?.message || 'Failed to delete template';
            throw new common_1.InternalServerErrorException(errorMessage);
        }
    }
    async getStats() {
        try {
            const client = await this.getClient();
            const response = await client.get('/usage/me');
            return response.data;
        }
        catch (error) {
            this.logger.error('Error fetching usage stats:', error.response?.data || error.message);
            throw new common_1.InternalServerErrorException('Failed to fetch usage stats');
        }
    }
    async getMessagingSettings() {
        return this.getSettings();
    }
    async updateMessagingSettings(data) {
        let settings = await this.messagingSettingsModel.findOne().exec();
        if (!settings) {
            settings = new this.messagingSettingsModel(data);
        }
        else {
            Object.assign(settings, data);
        }
        return settings.save();
    }
};
exports.MessagingService = MessagingService;
exports.MessagingService = MessagingService = MessagingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messaging_settings_schema_1.MessagingSettings.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MessagingService);
//# sourceMappingURL=messaging.service.js.map