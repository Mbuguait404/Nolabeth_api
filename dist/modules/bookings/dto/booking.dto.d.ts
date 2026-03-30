export declare enum BookingStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled",
    COMPLETED = "completed"
}
export declare class CreateBookingDto {
    name: string;
    email: string;
    phone: string;
    serviceId: string;
    message?: string;
    preferredDate?: string;
}
declare const UpdateBookingDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookingDto>>;
export declare class UpdateBookingDto extends UpdateBookingDto_base {
    status?: BookingStatus;
}
export {};
