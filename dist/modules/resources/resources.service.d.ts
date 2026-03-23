import { Model } from 'mongoose';
import { Resource, ResourceDocument, ResourceType } from './schemas/resource.schema';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ResourcesService {
    private resourceModel;
    constructor(resourceModel: Model<ResourceDocument>);
    findAll(pagination: PaginationDto & {
        type?: ResourceType;
        category?: string;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, ResourceDocument, {}, import("mongoose").DefaultSchemaOptions> & Resource & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, ResourceDocument, {}, import("mongoose").DefaultSchemaOptions> & Resource & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateResourceDto): Promise<import("mongoose").Document<unknown, {}, ResourceDocument, {}, import("mongoose").DefaultSchemaOptions> & Resource & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateResourceDto): Promise<import("mongoose").Document<unknown, {}, ResourceDocument, {}, import("mongoose").DefaultSchemaOptions> & Resource & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
