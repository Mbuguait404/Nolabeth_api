import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Media {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string; // 'image' | 'video'

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  thumbnail: string;

  @Prop({ type: String })
  description: string;

  @Prop({ required: true })
  category: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
