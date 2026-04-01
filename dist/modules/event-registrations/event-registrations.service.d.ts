import { Model } from 'mongoose';
import { EventRegistrationDocument } from './schemas/event-registration.schema';
import { CreateEventRegistrationDto, UpdateRegistrationStatusDto } from './dto/create-event-registration.dto';
import { EventDocument } from '../events/schemas/event.schema';
export declare class EventRegistrationsService {
    private registrationModel;
    private eventModel;
    constructor(registrationModel: Model<EventRegistrationDocument>, eventModel: Model<EventDocument>);
    create(createRegistrationDto: CreateEventRegistrationDto): Promise<EventRegistrationDocument>;
    findAll(): Promise<EventRegistrationDocument[]>;
    findByEvent(eventId: string): Promise<EventRegistrationDocument[]>;
    updateStatus(id: string, updateStatusDto: UpdateRegistrationStatusDto): Promise<EventRegistrationDocument>;
    findOne(id: string): Promise<EventRegistrationDocument>;
}
