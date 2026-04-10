import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderStatusDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schema").Order>;
    findAll(): Promise<import("./schemas/order.schema").Order[]>;
    findOne(id: string): Promise<import("./schemas/order.schema").Order>;
    updateStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto): Promise<import("./schemas/order.schema").Order>;
    remove(id: string): Promise<any>;
}
