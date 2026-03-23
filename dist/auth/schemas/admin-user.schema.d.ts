import { Document } from 'mongoose';
export declare enum AdminRole {
    ADMIN = "Admin",
    SUPER_ADMIN = "SuperAdmin"
}
export type AdminUserDocument = AdminUser & Document;
export declare class AdminUser {
    name: string;
    email: string;
    password_hash: string;
    role: AdminRole;
    last_login?: Date;
}
export declare const AdminUserSchema: import("mongoose").Schema<AdminUser, import("mongoose").Model<AdminUser, any, any, any, (Document<unknown, any, AdminUser, any, import("mongoose").DefaultSchemaOptions> & AdminUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, AdminUser, any, import("mongoose").DefaultSchemaOptions> & AdminUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, AdminUser>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AdminUser, Document<unknown, {}, AdminUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password_hash?: import("mongoose").SchemaDefinitionProperty<string, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    role?: import("mongoose").SchemaDefinitionProperty<AdminRole, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    last_login?: import("mongoose").SchemaDefinitionProperty<Date | undefined, AdminUser, Document<unknown, {}, AdminUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<AdminUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, AdminUser>;
