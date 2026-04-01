import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateEventRegistrationDto {
  @IsNotEmpty()
  @IsString()
  event_id: string;

  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @IsOptional()
  additional_details: any;
}

export class UpdateRegistrationStatusDto {
  @IsNotEmpty()
  @IsEnum(['Pending', 'Confirmed', 'Cancelled', 'Completed'])
  status: string;
}
