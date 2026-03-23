import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum AdminRole {
  ADMIN = 'Admin',
  SUPER_ADMIN = 'SuperAdmin',
}

export type AdminUserDocument = AdminUser & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class AdminUser {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({ type: String, enum: AdminRole, default: AdminRole.ADMIN })
  role: AdminRole;

  @Prop({ nullable: true })
  last_login?: Date;
}

export const AdminUserSchema = SchemaFactory.createForClass(AdminUser);
