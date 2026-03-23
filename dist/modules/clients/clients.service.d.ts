import { Model } from 'mongoose';
import { Client, ClientDocument, ClientStatus } from './schemas/client.schema';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ClientsService {
    private clientModel;
    constructor(clientModel: Model<ClientDocument>);
    findAll(pagination: PaginationDto & {
        status?: ClientStatus;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateClientDto): Promise<import("mongoose").Document<unknown, {}, ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateClientDto): Promise<import("mongoose").Document<unknown, {}, ClientDocument, {}, import("mongoose").DefaultSchemaOptions> & Client & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        total: number;
        newLeads: number;
        inProgress: number;
        completed: number;
    }>;
}
