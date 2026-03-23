import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum EventStatus {
  UPCOMING = 'Upcoming',
  PAST = 'Past',
  CANCELLED = 'Cancelled',
}

export enum EventCategory {
  COHORT = 'Cohort Program',
  WORKSHOP = 'Workshop',
  VIRTUAL = 'Virtual Workshop',
  AWARENESS = 'Awareness',
}

export type EventDocument = MyEvent & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class MyEvent {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: string;

  @Prop({ nullable: true })
  time_range: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String })
  long_description: string;

  @Prop({ default: 0 })
  capacity: number;

  @Prop({ nullable: true })
  price_kes: string;

  @Prop({ nullable: true })
  image_url: string;

  @Prop({ type: String, enum: EventStatus, default: EventStatus.UPCOMING })
  status: EventStatus;

  @Prop({ type: String, enum: EventCategory, nullable: true })
  category: EventCategory;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop({ nullable: true })
  organizer_name: string;

  @Prop({ nullable: true })
  organizer_role: string;

  @Prop({ default: 0 })
  registrations_count: number;
}

export const EventSchema = SchemaFactory.createForClass(MyEvent);
