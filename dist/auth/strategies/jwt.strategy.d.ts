import { Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { AdminUser, AdminUserDocument } from '../schemas/admin-user.schema';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private adminModel;
    private configService;
    constructor(adminModel: Model<AdminUserDocument>, configService: ConfigService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<import("mongoose").Document<unknown, {}, AdminUserDocument, {}, import("mongoose").DefaultSchemaOptions> & AdminUser & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
export {};
