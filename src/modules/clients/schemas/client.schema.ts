import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InquiryType } from '../entities/client.entity';

export enum ClientStatus {
  NEW = 'New',
  IN_PROGRESS = 'In-Progress',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export type ClientDocument = Client & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Client {
  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  phone_number: string;

  @Prop({ type: String, enum: InquiryType, default: InquiryType.GENERAL })
  inquiry_type: InquiryType;

  @Prop({ type: String, enum: ClientStatus, default: ClientStatus.NEW })
  status: ClientStatus;

  @Prop({ type: String, nullable: true })
  source: string;

  @Prop({ type: String, nullable: true })
  notes: string;

  @Prop({ nullable: true })
  last_contacted_at: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
