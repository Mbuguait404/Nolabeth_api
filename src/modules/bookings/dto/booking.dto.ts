import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export class CreateBookingDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  serviceId: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsString()
  preferredDate?: string;
}

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;
}
