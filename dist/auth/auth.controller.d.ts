import { AuthService } from './auth.service';
import { LoginDto, CreateAdminDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: import("./schemas/admin-user.schema").AdminRole;
        };
    }>;
    logout(): {
        message: string;
    };
    createAdmin(dto: CreateAdminDto): Promise<import("./schemas/admin-user.schema").AdminUser & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/admin-user.schema").AdminUserDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/admin-user.schema").AdminUser & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
}
