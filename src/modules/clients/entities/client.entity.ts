import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

export enum InquiryType {
  COUNSELING = 'Counseling',
  WORKSHOP = 'Workshop',
  GENERAL = 'General',
}

export enum ClientStatus {
  NEW = 'New',
  IN_PROGRESS = 'In-Progress',
  COMPLETED = 'Completed',
}

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ type: 'enum', enum: InquiryType, default: InquiryType.GENERAL })
  inquiry_type: InquiryType;

  @Column('text', { nullable: true })
  notes: string;

  @Column({ type: 'enum', enum: ClientStatus, default: ClientStatus.NEW })
  status: ClientStatus;

  @Column({ nullable: true })
  source: string; // e.g. 'contact_form', 'workshop_signup'

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
