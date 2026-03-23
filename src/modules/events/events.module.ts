import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MyEvent, EventSchema } from './schemas/event.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MyEvent.name, schema: EventSchema }])],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [EventsService],
})
export class EventsModule {}
