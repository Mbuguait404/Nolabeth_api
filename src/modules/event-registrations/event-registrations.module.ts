import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventRegistrationsService } from './event-registrations.service';
import { EventRegistrationsController } from './event-registrations.controller';
import { EventRegistration, EventRegistrationSchema } from './schemas/event-registration.schema';
import { MyEvent, EventSchema } from '../events/schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EventRegistration.name, schema: EventRegistrationSchema },
      { name: MyEvent.name, schema: EventSchema },
    ]),
  ],
  controllers: [EventRegistrationsController],
  providers: [EventRegistrationsService],
  exports: [EventRegistrationsService],
})
export class EventRegistrationsModule {}
