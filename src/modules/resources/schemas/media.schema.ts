import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Media {
  @Prop({ type: String, enum: ['image', 'video'], default: 'image' })
  type: string;

  @Prop({ required: true })
  url: string;

  @Prop({ nullable: true })
  thumbnail: string;

  @Prop({ required: true })
  title: string;

  @Prop({ nullable: true })
  description: string;

  @Prop({ required: true })
  category: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
