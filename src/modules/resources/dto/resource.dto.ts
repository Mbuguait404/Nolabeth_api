import { IsString, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ResourceType } from '../entities/resource.entity';

export class CreateResourceDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(ResourceType)
  type: ResourceType;

  @IsString()
  file_url: string;

  @IsOptional()
  @IsString()
  size_info?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

export class UpdateResourceDto extends PartialType(CreateResourceDto) {}
