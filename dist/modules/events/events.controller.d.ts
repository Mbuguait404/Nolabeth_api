import { EventsService } from './events.service';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(pagination: PaginationDto): Promise<{
        data: import("./entities/event.entity").Event[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/event.entity").Event>;
    create(dto: CreateEventDto): Promise<import("./entities/event.entity").Event>;
    update(id: string, dto: UpdateEventDto): Promise<import("./entities/event.entity").Event>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
