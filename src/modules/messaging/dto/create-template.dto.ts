import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TemplateCategory {
  SECURITY = 'security',
  MARKETING = 'marketing',
  ONBOARDING = 'Onboarding',
  NOTIFICATIONS = 'notifications',
  TRANSACTIONAL = 'transactional',
}

export enum MessageChannel {
  EMAIL = 'email',
  SMS = 'sms',
}

export class CreateTemplateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ enum: MessageChannel })
  @IsNotEmpty()
  @IsEnum(MessageChannel)
  channel: MessageChannel;

  @ApiProperty({ enum: TemplateCategory })
  @IsNotEmpty()
  @IsEnum(TemplateCategory)
  category: TemplateCategory;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  subject?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
