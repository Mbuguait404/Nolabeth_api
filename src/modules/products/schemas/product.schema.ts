import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ProductBadge {
  NEW = 'New',
  BESTSELLER = 'Bestseller',
  POPULAR = 'Popular',
  DIGITAL = 'Digital',
}

export enum StockStatus {
  IN_STOCK = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
  LOW_STOCK = 'Low Stock',
}

export type ProductDocument = Product & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ required: true })
  price_kes: number;

  @Prop({ required: true })
  category: string;

  @Prop({ nullable: true })
  image_url: string;

  @Prop({ type: String, enum: ProductBadge, nullable: true })
  badge: ProductBadge;

  @Prop({ type: String, enum: StockStatus, default: StockStatus.IN_STOCK })
  stock_status: StockStatus;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: 0 })
  review_count: number;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop({ type: String })
  details: string;

  @Prop({ default: true })
  is_active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Pre-save hook for slug generation from name
ProductSchema.pre('save', async function (this: ProductDocument) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
});
