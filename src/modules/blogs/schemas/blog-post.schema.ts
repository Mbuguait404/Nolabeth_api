import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogPostDocument = BlogPost & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class BlogPost {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  author_name: string;

  @Prop({ nullable: true })
  published_date: string;

  @Prop({ nullable: true })
  read_time: string;

  @Prop({ required: true })
  category: string;

  @Prop({ type: String })
  excerpt: string;

  @Prop({ type: String, required: true })
  content_rich_text: string;

  @Prop({ nullable: true })
  featured_image_url: string;

  @Prop({ default: false })
  is_featured: boolean;

  @Prop({ default: false })
  is_published: boolean;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);

// Pre-save hook for slug generation (if needed via mongoose directly)
BlogPostSchema.pre('save', function (this: BlogPostDocument, next: Function) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

