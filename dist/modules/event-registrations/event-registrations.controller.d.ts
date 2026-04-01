import { EventRegistrationsService } from './event-registrations.service';
import { CreateEventRegistrationDto, UpdateRegistrationStatusDto } from './dto/create-event-registration.dto';
export declare class EventRegistrationsController {
    private readonly eventRegistrationsService;
    constructor(eventRegistrationsService: EventRegistrationsService);
    create(createRegistrationDto: CreateEventRegistrationDto): Promise<import("./schemas/event-registration.schema").EventRegistrationDocument>;
    findAll(): Promise<import("./schemas/event-registration.schema").EventRegistrationDocument[]>;
    findByEvent(eventId: string): Promise<import("./schemas/event-registration.schema").EventRegistrationDocument[]>;
    findOne(id: string): Promise<import("./schemas/event-registration.schema").EventRegistrationDocument>;
    updateStatus(id: string, updateStatusDto: UpdateRegistrationStatusDto): Promise<import("./schemas/event-registration.schema").EventRegistrationDocument>;
}
