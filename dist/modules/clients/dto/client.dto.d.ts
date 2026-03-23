import { InquiryType } from '../entities/client.entity';
import { ClientStatus } from '../schemas/client.schema';
export declare class CreateClientDto {
    full_name: string;
    email: string;
    phone_number?: string;
    inquiry_type?: InquiryType;
    notes?: string;
    source?: string;
    status?: ClientStatus;
}
declare const UpdateClientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
}
export {};
