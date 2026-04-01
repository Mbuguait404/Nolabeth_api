import { Document, Schema as MongooseSchema } from 'mongoose';
export type EventRegistrationDocument = EventRegistration & Document;
export declare class EventRegistration {
    event_id: MongooseSchema.Types.ObjectId;
    full_name: string;
    email: string;
    phone_number: string;
    country: string;
    payment_method: string;
    status: string;
    additional_details: any;
}
export declare const EventRegistrationSchema: MongooseSchema<EventRegistration, import("mongoose").Model<EventRegistration, any, any, any, (Document<unknown, any, EventRegistration, any, import("mongoose").DefaultSchemaOptions> & EventRegistration & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, EventRegistration, any, import("mongoose").DefaultSchemaOptions> & EventRegistration & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, EventRegistration>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EventRegistration, Document<unknown, {}, EventRegistration, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    event_id?: import("mongoose").SchemaDefinitionProperty<MongooseSchema.Types.ObjectId, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    full_name?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone_number?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    country?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    payment_method?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    additional_details?: import("mongoose").SchemaDefinitionProperty<any, EventRegistration, Document<unknown, {}, EventRegistration, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventRegistration & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, EventRegistration>;
