import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class StorySection {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ nullable: true })
  timestamp: string;
}

export type StoryDocument = Story & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Story {
  @Prop({ required: true })
  title: string;

  @Prop({ nullable: true })
  subtitle: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  videoId: string;

  @Prop({ nullable: true })
  avatar: string;

  @Prop({ nullable: true })
  link: string;

  @Prop({ nullable: true })
  image: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ nullable: true })
  quote: string;

  @Prop({ type: [StorySection], default: [] })
  sections: StorySection[];
}

export const StorySchema = SchemaFactory.createForClass(Story);
