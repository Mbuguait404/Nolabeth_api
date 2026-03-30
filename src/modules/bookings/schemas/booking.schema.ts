import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Booking {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  serviceId: string;

  @Prop()
  message: string;

  @Prop()
  preferredDate: string;

  @Prop({ default: 'pending', enum: ['pending', 'confirmed', 'cancelled', 'completed'] })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
