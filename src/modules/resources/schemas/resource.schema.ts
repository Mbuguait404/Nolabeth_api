import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ResourceType {
  PDF = 'PDF',
  VIDEO = 'Video',
  AUDIO = 'Audio',
  EBOOK = 'E-Book',
}

export type ResourceDocument = Resource & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Resource {
  @Prop({ required: true })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, enum: ResourceType, required: true })
  type: ResourceType;

  @Prop({ required: true })
  file_url: string;

  @Prop({ nullable: true })
  size_info: string;

  @Prop({ nullable: true })
  category: string;

  @Prop({ default: true })
  is_active: boolean;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
