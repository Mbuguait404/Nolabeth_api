import {
  IsString, IsOptional, IsArray, IsBoolean, IsNumber, IsObject, ValidateNested, Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class ProcessStepDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateTherapyServiceDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  long_description?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  benefits?: string[];

  @IsOptional()
  @IsString()
  icon_identifier?: string;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priority_order?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsString()
  color_class?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcessStepDto)
  process_steps?: ProcessStepDto[];
}

export class UpdateTherapyServiceDto extends PartialType(CreateTherapyServiceDto) {}
