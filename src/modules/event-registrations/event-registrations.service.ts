import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { EventRegistration, EventRegistrationDocument } from './schemas/event-registration.schema';
import { CreateEventRegistrationDto, UpdateRegistrationStatusDto } from './dto/create-event-registration.dto';
import { MyEvent, EventDocument } from '../events/schemas/event.schema';

@Injectable()
export class EventRegistrationsService {
  constructor(
    @InjectModel(EventRegistration.name) private registrationModel: Model<EventRegistrationDocument>,
    @InjectModel(MyEvent.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createRegistrationDto: CreateEventRegistrationDto): Promise<EventRegistrationDocument> {
    const { event_id, ...rest } = createRegistrationDto;
    
    const event = await this.eventModel.findById(event_id);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const registration = new this.registrationModel({
      event_id: new Types.ObjectId(event_id),
      ...rest,
    });

    const savedRegistration = await registration.save();
    
    // Increment registrations_count
    await this.eventModel.findByIdAndUpdate(event_id, {
      $inc: { registrations_count: 1 }
    });

    return savedRegistration;
  }

  async findAll(): Promise<EventRegistrationDocument[]> {
    return this.registrationModel.find().populate('event_id').sort({ created_at: -1 }).exec();
  }

  async findByEvent(eventId: string): Promise<EventRegistrationDocument[]> {
    const filter: any = { event_id: eventId };
    return this.registrationModel.find(filter).sort({ created_at: -1 }).exec();
  }

  async updateStatus(id: string, updateStatusDto: UpdateRegistrationStatusDto): Promise<EventRegistrationDocument> {
    const registration = await this.registrationModel.findByIdAndUpdate(
      id,
      { status: updateStatusDto.status },
      { new: true }
    );
    
    if (!registration) {
      throw new NotFoundException('Registration not found');
    }
    
    return registration;
  }

  async findOne(id: string): Promise<EventRegistrationDocument> {
    const registration = await this.registrationModel.findById(id).populate('event_id').exec();
    if (!registration) {
      throw new NotFoundException('Registration not found');
    }
    return registration;
  }
}
