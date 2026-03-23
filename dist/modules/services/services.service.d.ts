import { Model } from 'mongoose';
import { TherapyService, TherapyServiceDocument } from './schemas/therapy-service.schema';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ServicesService {
    private serviceModel;
    constructor(serviceModel: Model<TherapyServiceDocument>);
    findAll(pagination: PaginationDto): Promise<{
        data: (import("mongoose").Document<unknown, {}, TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateTherapyServiceDto): Promise<import("mongoose").Document<unknown, {}, TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateTherapyServiceDto): Promise<import("mongoose").Document<unknown, {}, TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    reorder(orderedIds: string[]): Promise<{
        message: string;
    }>;
}
