import {
  IsString, IsOptional, IsEnum, IsNumber, IsArray, IsBoolean, Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ProductBadge, StockStatus } from '../entities/product.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price_kes: number;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsEnum(ProductBadge)
  badge?: ProductBadge;

  @IsOptional()
  @IsEnum(StockStatus)
  stock_status?: StockStatus;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @IsOptional()
  @IsString()
  details?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
