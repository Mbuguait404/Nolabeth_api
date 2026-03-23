import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

export enum EventStatus {
  UPCOMING = 'Upcoming',
  PAST = 'Past',
  CANCELLED = 'Cancelled',
}

export enum EventCategory {
  COHORT = 'Cohort Program',
  WORKSHOP = 'Workshop',
  VIRTUAL = 'Virtual Workshop',
  AWARENESS = 'Awareness',
}

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  time_range: string;

  @Column()
  location: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  long_description: string;

  @Column({ default: 0 })
  capacity: number;

  @Column({ nullable: true })
  price_kes: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: 'enum', enum: EventStatus, default: EventStatus.UPCOMING })
  status: EventStatus;

  @Column({ type: 'enum', enum: EventCategory, nullable: true })
  category: EventCategory;

  @Column('text', { array: true, default: [] })
  features: string[];

  @Column({ nullable: true })
  organizer_name: string;

  @Column({ nullable: true })
  organizer_role: string;

  @Column({ default: 0 })
  registrations_count: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
