import { Model } from 'mongoose';
import { MessagingSettings, MessagingSettingsDocument } from './schemas/messaging-settings.schema';
export declare class MessagingService {
    private messagingSettingsModel;
    private readonly logger;
    private readonly DEFAULT_BASE_URL;
    private readonly DEFAULT_API_KEY;
    constructor(messagingSettingsModel: Model<MessagingSettingsDocument>);
    private getSettings;
    private getClient;
    sendNotification(data: any): Promise<any>;
    getLogs(params?: any): Promise<any>;
    getTemplates(): Promise<any>;
    createTemplate(data: any): Promise<any>;
    updateTemplate(id: string, data: any): Promise<any>;
    deleteTemplate(id: string): Promise<any>;
    getStats(): Promise<any>;
    getMessagingSettings(): Promise<import("mongoose").Document<unknown, {}, MessagingSettingsDocument, {}, import("mongoose").DefaultSchemaOptions> & MessagingSettings & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateMessagingSettings(data: Partial<MessagingSettings>): Promise<import("mongoose").Document<unknown, {}, MessagingSettingsDocument, {}, import("mongoose").DefaultSchemaOptions> & MessagingSettings & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
