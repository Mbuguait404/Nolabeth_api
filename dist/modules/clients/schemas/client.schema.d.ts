import { Document } from 'mongoose';
export declare enum ClientStatus {
    NEW = "New",
    IN_PROGRESS = "In Progress",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled"
}
export type ClientDocument = Client & Document;
export declare class Client {
    full_name: string;
    email: string;
    phone: string;
    service_requested: string;
    status: ClientStatus;
    notes: string;
    last_contacted_at: Date;
}
export declare const ClientSchema: import("mongoose").Schema<Client, import("mongoose").Model<Client, any, any, any, (Document<unknown, any, Client, any, import("mongoose").DefaultSchemaOptions> & Client & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Client, any, import("mongoose").DefaultSchemaOptions> & Client & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Client>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Client, Document<unknown, {}, Client, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    full_name?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    service_requested?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<ClientStatus, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    notes?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    last_contacted_at?: import("mongoose").SchemaDefinitionProperty<Date, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Client>;
