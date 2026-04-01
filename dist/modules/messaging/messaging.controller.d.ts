import { MessagingService } from './messaging.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
export declare class MessagingController {
    private readonly messagingService;
    constructor(messagingService: MessagingService);
    send(data: any): Promise<any>;
    getLogs(query: any): Promise<any>;
    getTemplates(): Promise<any>;
    createTemplate(data: CreateTemplateDto): Promise<any>;
    updateTemplate(id: string, data: UpdateTemplateDto): Promise<any>;
    deleteTemplate(id: string): Promise<any>;
    getStats(): Promise<any>;
    getSettings(): Promise<import("mongoose").Document<unknown, {}, import("./schemas/messaging-settings.schema").MessagingSettingsDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/messaging-settings.schema").MessagingSettings & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    updateSettings(data: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/messaging-settings.schema").MessagingSettingsDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/messaging-settings.schema").MessagingSettings & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
