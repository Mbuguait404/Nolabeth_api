import { IsString, IsNumber, IsArray, IsObject, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  image: string;
}

export class CreateOrderDto {
  @IsObject()
  @IsNotEmpty()
  user_info: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNumber()
  @IsNotEmpty()
  total_amount: number;

  @IsString()
  @IsNotEmpty()
  payment_method: string;
}

export class UpdateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  status: string;
}
