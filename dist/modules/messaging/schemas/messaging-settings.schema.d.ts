import { Document } from 'mongoose';
export type MessagingSettingsDocument = MessagingSettings & Document;
export declare class MessagingSettings {
    base_url: string;
    api_key: string;
    use_default: boolean;
}
export declare const MessagingSettingsSchema: import("mongoose").Schema<MessagingSettings, import("mongoose").Model<MessagingSettings, any, any, any, (Document<unknown, any, MessagingSettings, any, import("mongoose").DefaultSchemaOptions> & MessagingSettings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, MessagingSettings, any, import("mongoose").DefaultSchemaOptions> & MessagingSettings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, MessagingSettings>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessagingSettings, Document<unknown, {}, MessagingSettings, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<MessagingSettings & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    base_url?: import("mongoose").SchemaDefinitionProperty<string, MessagingSettings, Document<unknown, {}, MessagingSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessagingSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    api_key?: import("mongoose").SchemaDefinitionProperty<string, MessagingSettings, Document<unknown, {}, MessagingSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessagingSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    use_default?: import("mongoose").SchemaDefinitionProperty<boolean, MessagingSettings, Document<unknown, {}, MessagingSettings, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessagingSettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, MessagingSettings>;
