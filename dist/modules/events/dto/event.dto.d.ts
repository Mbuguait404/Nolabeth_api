import { EventStatus, EventCategory } from '../entities/event.entity';
export declare class CreateEventDto {
    title: string;
    slug?: string;
    date: string;
    time_range?: string;
    location: string;
    description: string;
    long_description?: string;
    capacity?: number;
    price_kes?: string;
    image_url?: string;
    status?: EventStatus;
    category?: EventCategory;
    features?: string[];
    organizer_name?: string;
    organizer_role?: string;
}
declare const UpdateEventDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEventDto>>;
export declare class UpdateEventDto extends UpdateEventDto_base {
}
export {};
