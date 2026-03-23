import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('services')
export class TherapyService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  long_description: string;

  @Column('text', { array: true, default: [] })
  features: string[];

  @Column('text', { array: true, default: [] })
  benefits: string[];

  @Column({ nullable: true })
  icon_identifier: string; // lucide icon name e.g. "User", "Heart"

  @Column({ nullable: true })
  image_url: string;

  @Column({ default: 0 })
  priority_order: number; // Controls display order on the website

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  color_class: string; // e.g. "from-lapis/10 to-lapis/5"

  // Process steps stored as JSON array
  @Column('jsonb', { nullable: true })
  process_steps: Array<{ title: string; description: string }>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
