import { EventsService } from './events.service';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(pagination: PaginationDto): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<any>;
    create(dto: CreateEventDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateEventDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/event.schema").MyEvent & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
