import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class EventsService {
    private eventsRepo;
    constructor(eventsRepo: Repository<Event>);
    findAll(pagination: PaginationDto): Promise<{
        data: Event[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<Event>;
    create(dto: CreateEventDto): Promise<Event>;
    update(id: string, dto: UpdateEventDto): Promise<Event>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        total: number;
        upcoming: number;
        past: number;
    }>;
}
