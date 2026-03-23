import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { AdminUser, AdminUserDocument } from './schemas/admin-user.schema';
import { LoginDto, CreateAdminDto } from './dto/auth.dto';
export declare class AuthService {
    private adminModel;
    private jwtService;
    constructor(adminModel: Model<AdminUserDocument>, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: import("./schemas/admin-user.schema").AdminRole;
        };
    }>;
    createAdmin(dto: CreateAdminDto): Promise<AdminUser & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, AdminUserDocument, {}, import("mongoose").DefaultSchemaOptions> & AdminUser & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
