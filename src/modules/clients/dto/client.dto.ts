import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { InquiryType } from '../entities/client.entity';
import { ClientStatus } from '../schemas/client.schema';

export class CreateClientDto {
  @IsString()
  full_name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsEnum(InquiryType)
  inquiry_type?: InquiryType;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  source?: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsOptional()
  @IsEnum(ClientStatus)
  status?: ClientStatus;
}
