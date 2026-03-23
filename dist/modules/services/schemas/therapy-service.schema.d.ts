import { Document } from 'mongoose';
export type TherapyServiceDocument = TherapyService & Document;
export declare class TherapyService {
    title: string;
    description: string;
    long_description: string;
    features: string[];
    benefits: string[];
    icon_identifier: string;
    image_url: string;
    priority_order: number;
    is_active: boolean;
    color_class: string;
    process_steps: Array<{
        title: string;
        description: string;
    }>;
}
export declare const TherapyServiceSchema: import("mongoose").Schema<TherapyService, import("mongoose").Model<TherapyService, any, any, any, (Document<unknown, any, TherapyService, any, import("mongoose").DefaultSchemaOptions> & TherapyService & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, TherapyService, any, import("mongoose").DefaultSchemaOptions> & TherapyService & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, TherapyService>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TherapyService, Document<unknown, {}, TherapyService, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    long_description?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    features?: import("mongoose").SchemaDefinitionProperty<string[], TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    benefits?: import("mongoose").SchemaDefinitionProperty<string[], TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icon_identifier?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    image_url?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    priority_order?: import("mongoose").SchemaDefinitionProperty<number, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    is_active?: import("mongoose").SchemaDefinitionProperty<boolean, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    color_class?: import("mongoose").SchemaDefinitionProperty<string, TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    process_steps?: import("mongoose").SchemaDefinitionProperty<{
        title: string;
        description: string;
    }[], TherapyService, Document<unknown, {}, TherapyService, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TherapyService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TherapyService>;
