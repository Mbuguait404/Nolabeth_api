import { IsString, IsOptional, IsObject } from 'class-validator';

export class UpdateSettingsDto {
  @IsString()
  @IsOptional()
  site_name?: string;

  @IsString()
  @IsOptional()
  site_tagline?: string;

  @IsString()
  @IsOptional()
  site_description?: string;

  @IsString()
  @IsOptional()
  contact_email?: string;

  @IsString()
  @IsOptional()
  contact_phone?: string;

  @IsString()
  @IsOptional()
  contact_address?: string;

  @IsObject()
  @IsOptional()
  social_links?: {
    facebook?: string;
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };

  @IsString()
  @IsOptional()
  hero_title?: string;

  @IsString()
  @IsOptional()
  hero_subtitle?: string;

  @IsString()
  @IsOptional()
  logo_url?: string;

  @IsString()
  @IsOptional()
  footer_text?: string;
}
