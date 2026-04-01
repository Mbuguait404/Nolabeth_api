import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EventRegistrationDocument = EventRegistration & Document;

@Schema({ 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'event_registrations'
})
export class EventRegistration {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'MyEvent', required: true })
  event_id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  payment_method: string;

  @Prop({ default: 'Pending' })
  status: string; // Pending, Confirmed, Cancelled, Completed

  @Prop({ type: Object })
  additional_details: any;
}

export const EventRegistrationSchema = SchemaFactory.createForClass(EventRegistration);
