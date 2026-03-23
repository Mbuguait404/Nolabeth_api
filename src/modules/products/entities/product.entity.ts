import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

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

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price_kes: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'enum', enum: ProductBadge, nullable: true })
  badge: ProductBadge;

  @Column({ type: 'enum', enum: StockStatus, default: StockStatus.IN_STOCK })
  stock_status: StockStatus;

  @Column('decimal', { precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ default: 0 })
  review_count: number;

  @Column('text', { array: true, default: [] })
  features: string[];

  @Column('text', { nullable: true })
  details: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
