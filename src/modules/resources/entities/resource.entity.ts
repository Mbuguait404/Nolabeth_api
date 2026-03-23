import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

export enum ResourceType {
  PDF = 'PDF',
  VIDEO = 'Video',
  AUDIO = 'Audio',
  EBOOK = 'E-Book',
}

@Entity('resources')
export class Resource {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ type: 'enum', enum: ResourceType })
  type: ResourceType;

  @Column()
  file_url: string;

  @Column({ nullable: true })
  size_info: string; // e.g. "2.4 MB"

  @Column({ nullable: true })
  category: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
