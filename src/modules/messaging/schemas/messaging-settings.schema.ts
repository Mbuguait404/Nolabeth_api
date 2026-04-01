import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessagingSettingsDocument = MessagingSettings & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class MessagingSettings {
  @Prop({ default: 'https://smsapi.solby.io:8443' })
  base_url: string;

  @Prop({ default: 'nk_c7d28a99b9f96ab4c2aaaa6a62be16f0d4db06e040ea55af2a2b047d8a7ecf37' })
  api_key: string;

  @Prop({ default: true })
  use_default: boolean;
}

export const MessagingSettingsSchema = SchemaFactory.createForClass(MessagingSettings);
