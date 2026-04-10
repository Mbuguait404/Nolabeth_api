import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderId = Math.random().toString(36).substring(2, 11).toUpperCase();
    const createdOrder = new this.orderModel({
      ...createOrderDto,
      order_id: orderId,
    });
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().sort({ created_at: -1 }).exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async updateStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order> {
    const updatedOrder = await this.orderModel
      .findByIdAndUpdate(id, { status: updateOrderStatusDto.status }, { new: true })
      .exec();
    if (!updatedOrder) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return updatedOrder;
  }

  async remove(id: string): Promise<any> {
    const result = await this.orderModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return result;
  }
}
