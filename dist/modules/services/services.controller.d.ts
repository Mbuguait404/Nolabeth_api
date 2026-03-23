import { ServicesService } from './services.service';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(pagination: PaginationDto): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schemas/therapy-service.schema").TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/therapy-service.schema").TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/therapy-service.schema").TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/therapy-service.schema").TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateTherapyServiceDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/therapy-service.schema").TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/therapy-service.schema").TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    reorder(body: {
        orderedIds: string[];
    }): Promise<{
        message: string;
    }>;
    update(id: string, dto: UpdateTherapyServiceDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/therapy-service.schema").TherapyServiceDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/therapy-service.schema").TherapyService & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
