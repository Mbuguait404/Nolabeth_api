import { Model } from 'mongoose';
import { MyEvent, EventDocument } from './schemas/event.schema';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<EventDocument>);
    findAll(pagination: PaginationDto): Promise<{
        data: (import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateEventDto): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateEventDto): Promise<import("mongoose").Document<unknown, {}, EventDocument, {}, import("mongoose").DefaultSchemaOptions> & MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
        upcoming: number;
        past: number;
    }>;
}
