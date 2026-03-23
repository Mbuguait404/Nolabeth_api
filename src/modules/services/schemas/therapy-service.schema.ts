import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TherapyServiceDocument = TherapyService & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class TherapyService {
  @Prop({ required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String })
  long_description: string;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop({ type: [String], default: [] })
  benefits: string[];

  @Prop({ nullable: true })
  icon_identifier: string; // lucide icon name e.g. "User", "Heart"

  @Prop({ nullable: true })
  image_url: string;

  @Prop({ default: 0 })
  priority_order: number;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ nullable: true })
  color_class: string;

  @Prop({ type: [{ title: String, description: String }], nullable: true })
  process_steps: Array<{ title: string; description: string }>;
}

export const TherapyServiceSchema = SchemaFactory.createForClass(TherapyService);
