export declare class OrderItemDto {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}
export declare class CreateOrderDto {
    user_info: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        postalCode: string;
    };
    items: OrderItemDto[];
    total_amount: number;
    payment_method: string;
}
export declare class UpdateOrderStatusDto {
    status: string;
}
