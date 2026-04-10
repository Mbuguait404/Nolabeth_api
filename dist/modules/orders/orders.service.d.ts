import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto/create-order.dto';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    updateStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order>;
    remove(id: string): Promise<any>;
}
