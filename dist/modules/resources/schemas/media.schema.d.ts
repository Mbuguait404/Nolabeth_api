import { Document } from 'mongoose';
export type MediaDocument = Media & Document;
export declare class Media {
    type: string;
    url: string;
    thumbnail: string;
    title: string;
    description: string;
    category: string;
}
export declare const MediaSchema: import("mongoose").Schema<Media, import("mongoose").Model<Media, any, any, any, (Document<unknown, any, Media, any, import("mongoose").DefaultSchemaOptions> & Media & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Media, any, import("mongoose").DefaultSchemaOptions> & Media & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Media>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Media, Document<unknown, {}, Media, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    type?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    url?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    thumbnail?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, Media, Document<unknown, {}, Media, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Media & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Media>;
