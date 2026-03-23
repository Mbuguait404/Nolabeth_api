import { Document } from 'mongoose';
import { InquiryType } from '../entities/client.entity';
export declare enum ClientStatus {
    NEW = "New",
    IN_PROGRESS = "In-Progress",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled"
}
export type ClientDocument = Client & Document;
export declare class Client {
    full_name: string;
    email: string;
    phone_number: string;
    inquiry_type: InquiryType;
    status: ClientStatus;
    source: string;
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
    phone_number?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inquiry_type?: import("mongoose").SchemaDefinitionProperty<InquiryType, Client, Document<unknown, {}, Client, {
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
    source?: import("mongoose").SchemaDefinitionProperty<string, Client, Document<unknown, {}, Client, {
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
