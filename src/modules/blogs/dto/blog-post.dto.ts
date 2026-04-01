import {
  IsString, IsOptional, IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBlogPostDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsString()
  author_name: string;

  @IsOptional()
  @IsString()
  published_date?: string;

  @IsOptional()
  @IsString()
  read_time?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsString()
  content_rich_text: string;

  @IsOptional()
  @IsString()
  featured_image_url?: string;

  @IsOptional()
  @IsBoolean()
  is_featured?: boolean;

  @IsOptional()
  @IsBoolean()
  is_published?: boolean;

  @IsOptional()
  @IsString({ each: true })
  tags?: string[];
}

export class UpdateBlogPostDto extends PartialType(CreateBlogPostDto) {}
