import { Model } from 'mongoose';
import { SettingsDocument } from './schemas/settings.schema';
import { UpdateSettingsDto } from './dto/update-settings.dto';
export declare class SettingsService {
    private settingsModel;
    constructor(settingsModel: Model<SettingsDocument>);
    getSettings(): Promise<SettingsDocument>;
    updateSettings(updateSettingsDto: UpdateSettingsDto): Promise<SettingsDocument>;
}
