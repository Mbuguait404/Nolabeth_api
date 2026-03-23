import { Document } from 'mongoose';
export declare enum ResourceType {
    PDF = "PDF",
    VIDEO = "Video",
    AUDIO = "Audio",
    EBOOK = "E-Book"
}
export type ResourceDocument = Resource & Document;
export declare class Resource {
    title: string;
    description: string;
    type: ResourceType;
    file_url: string;
    size_info: string;
    category: string;
    is_active: boolean;
}
export declare const ResourceSchema: import("mongoose").Schema<Resource, import("mongoose").Model<Resource, any, any, any, (Document<unknown, any, Resource, any, import("mongoose").DefaultSchemaOptions> & Resource & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Resource, any, import("mongoose").DefaultSchemaOptions> & Resource & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Resource>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Resource, Document<unknown, {}, Resource, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<ResourceType, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    file_url?: import("mongoose").SchemaDefinitionProperty<string, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    size_info?: import("mongoose").SchemaDefinitionProperty<string, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, Resource, Document<unknown, {}, Resource, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Resource & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Resource>;
