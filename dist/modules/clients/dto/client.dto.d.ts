import { InquiryType, ClientStatus } from '../entities/client.entity';
export declare class CreateClientDto {
    full_name: string;
    email: string;
    phone_number?: string;
    inquiry_type?: InquiryType;
    notes?: string;
    source?: string;
}
declare const UpdateClientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    status?: ClientStatus;
}
export {};
