export declare enum EventStatus {
    UPCOMING = "Upcoming",
    PAST = "Past",
    CANCELLED = "Cancelled"
}
export declare enum EventCategory {
    COHORT = "Cohort Program",
    WORKSHOP = "Workshop",
    VIRTUAL = "Virtual Workshop",
    AWARENESS = "Awareness"
}
export declare class Event {
    id: string;
    title: string;
    date: string;
    time_range: string;
    location: string;
    description: string;
    long_description: string;
    capacity: number;
    price_kes: string;
    image_url: string;
    status: EventStatus;
    category: EventCategory;
    features: string[];
    organizer_name: string;
    organizer_role: string;
    registrations_count: number;
    created_at: Date;
    updated_at: Date;
}
