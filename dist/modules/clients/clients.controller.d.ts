import { ClientsService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ClientStatus } from './schemas/client.schema';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(pagination: PaginationDto & {
        status?: ClientStatus;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schemas/client.schema").ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateClientDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateClientDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
