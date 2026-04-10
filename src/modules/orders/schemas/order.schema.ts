import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class OrderItem {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: String })
  image: string;
}

const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ 
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'orders'
})
export class Order {
  @Prop({ type: String, required: true })
  order_id: string;

  @Prop({ type: Object, required: true })
  user_info: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };

  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];

  @Prop({ type: Number, required: true })
  total_amount: number;

  @Prop({ type: String, default: 'Pending' })
  status: string; // Pending, Processing, Shipped, Delivered, Cancelled

  @Prop({ type: String, default: 'Pending' })
  payment_status: string; // Pending, Paid, Failed

  @Prop({ type: String, required: true })
  payment_method: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
