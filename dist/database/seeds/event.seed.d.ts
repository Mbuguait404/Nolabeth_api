import { Connection } from 'mongoose';
import { EventStatus, EventCategory } from '../../modules/events/schemas/event.schema';
export declare const upcomingEvents: {
    title: string;
    date: string;
    time_range: string;
    location: string;
    description: string;
    long_description: string;
    capacity: number;
    price_kes: string;
    image_url: string;
    category: EventCategory;
    status: EventStatus;
    features: string[];
    organizer_name: string;
    organizer_role: string;
}[];
export declare function seedEvents(connection: Connection): Promise<void>;
