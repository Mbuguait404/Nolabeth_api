import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { MessagingSettings, MessagingSettingsDocument } from './schemas/messaging-settings.schema';

@Injectable()
export class MessagingService {
  private readonly logger = new Logger(MessagingService.name);
  private readonly DEFAULT_BASE_URL = 'https://smsapi.solby.io:8443';
  private readonly DEFAULT_API_KEY = 'nk_c7d28a99b9f96ab4c2aaaa6a62be16f0d4db06e040ea55af2a2b047d8a7ecf37';

  constructor(
    @InjectModel(MessagingSettings.name)
    private messagingSettingsModel: Model<MessagingSettingsDocument>,
  ) { }

  private async getSettings() {
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

  private async getClient() {
    const settings = await this.getSettings();
    const baseURL = settings.use_default ? this.DEFAULT_BASE_URL : settings.base_url;
    const apiKey = settings.use_default ? this.DEFAULT_API_KEY : settings.api_key;

    return axios.create({
      baseURL,
      headers: {
        'UNIFIED-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  async sendNotification(data: any) {
    try {
      const client = await this.getClient();
      const response = await client.post('/notifications/send', data);
      return response.data;
    } catch (error) {
      this.logger.error('Error sending notification:', error.response?.data || error.message);
      throw new InternalServerErrorException(
        error.response?.data?.message || 'Failed to send notification',
      );
    }
  }

  async getLogs(params: any = {}) {
    try {
      const client = await this.getClient();
      const response = await client.get('/message-logs', { params });
      return response.data;
    } catch (error) {
      this.logger.error('Error fetching logs:', error.response?.data || error.message);
      throw new InternalServerErrorException('Failed to fetch message logs');
    }
  }

  async getTemplates() {
    try {
      const client = await this.getClient();
      const response = await client.get('/templates');
      return response.data;
    } catch (error) {
      this.logger.error('Error fetching templates:', error.response?.data || error.message);
      throw new InternalServerErrorException('Failed to fetch templates');
    }
  }

  async createTemplate(data: any) {
    try {
      const client = await this.getClient();
      const response = await client.post('/templates', data);
      return response.data;
    } catch (error) {
      const errorData = error.response?.data;
      this.logger.error('Error creating template:', errorData || error.message);
      
      const errorMessage = Array.isArray(errorData?.message) 
        ? errorData.message.join(', ') 
        : errorData?.message || 'Failed to create template';
        
      throw new InternalServerErrorException(errorMessage);
    }
  }

  async updateTemplate(id: string, data: any) {
    try {
      const client = await this.getClient();
      const response = await client.put(`/templates/${id}`, data);
      return response.data;
    } catch (error) {
      const errorData = error.response?.data;
      this.logger.error(`Error updating template ${id}:`, errorData || error.message);
      
      const errorMessage = Array.isArray(errorData?.message) 
        ? errorData.message.join(', ') 
        : errorData?.message || 'Failed to update template';
        
      throw new InternalServerErrorException(errorMessage);
    }
  }

  async deleteTemplate(id: string) {
    try {
      const client = await this.getClient();
      const response = await client.delete(`/templates/${id}`);
      return response.data;
    } catch (error) {
      const errorData = error.response?.data;
      this.logger.error(`Error deleting template ${id}:`, errorData || error.message);
      
      const errorMessage = Array.isArray(errorData?.message) 
        ? errorData.message.join(', ') 
        : errorData?.message || 'Failed to delete template';
        
      throw new InternalServerErrorException(errorMessage);
    }
  }

  async getStats() {
    try {
      const client = await this.getClient();
      const response = await client.get('/usage/me');
      return response.data;
    } catch (error) {
      this.logger.error('Error fetching usage stats:', error.response?.data || error.message);
      throw new InternalServerErrorException('Failed to fetch usage stats');
    }
  }

  async getMessagingSettings() {
    return this.getSettings();
  }

  async updateMessagingSettings(data: Partial<MessagingSettings>) {
    let settings = await this.messagingSettingsModel.findOne().exec();
    if (!settings) {
      settings = new this.messagingSettingsModel(data);
    } else {
      Object.assign(settings, data);
    }
    return settings.save();
  }
}
