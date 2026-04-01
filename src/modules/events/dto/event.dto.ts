import {
  IsString, IsOptional, IsEnum, IsNumber, IsArray, Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { EventStatus, EventCategory } from '../entities/event.entity';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  time_range?: string;

  @IsString()
  location: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  long_description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  capacity?: number;

  @IsOptional()
  @IsString()
  price_kes?: string;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsEnum(EventStatus)
  status?: EventStatus;

  @IsOptional()
  @IsEnum(EventCategory)
  category?: EventCategory;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @IsOptional()
  @IsString()
  organizer_name?: string;

  @IsOptional()
  @IsString()
  organizer_role?: string;
}

export class UpdateEventDto extends PartialType(CreateEventDto) {}
