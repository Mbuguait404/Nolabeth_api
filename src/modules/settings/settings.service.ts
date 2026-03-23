import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Settings, SettingsDocument } from './schemas/settings.schema';
import { UpdateSettingsDto } from './dto/update-settings.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Settings.name) private settingsModel: Model<SettingsDocument>,
  ) {}

  async getSettings(): Promise<SettingsDocument> {
    let settings = await this.settingsModel.findOne().exec();
    if (!settings) {
      settings = new this.settingsModel();
      await settings.save();
    }
    return settings;
  }

  async updateSettings(updateSettingsDto: UpdateSettingsDto): Promise<SettingsDocument> {
    let settings = await this.settingsModel.findOne().exec();
    if (!settings) {
      settings = new this.settingsModel(updateSettingsDto);
      return await settings.save();
    }
    
    Object.assign(settings, updateSettingsDto);
    return await settings.save();
  }
}
