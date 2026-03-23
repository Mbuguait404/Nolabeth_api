import { ResourceType } from '../entities/resource.entity';
export declare class CreateResourceDto {
    title: string;
    description?: string;
    type: ResourceType;
    file_url: string;
    size_info?: string;
    category?: string;
    is_active?: boolean;
}
declare const UpdateResourceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateResourceDto>>;
export declare class UpdateResourceDto extends UpdateResourceDto_base {
}
export {};
