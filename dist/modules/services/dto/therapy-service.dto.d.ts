declare class ProcessStepDto {
    title: string;
    description: string;
}
export declare class CreateTherapyServiceDto {
    title: string;
    description: string;
    long_description?: string;
    features?: string[];
    benefits?: string[];
    icon_identifier?: string;
    image_url?: string;
    priority_order?: number;
    is_active?: boolean;
    color_class?: string;
    process_steps?: ProcessStepDto[];
}
declare const UpdateTherapyServiceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTherapyServiceDto>>;
export declare class UpdateTherapyServiceDto extends UpdateTherapyServiceDto_base {
}
export {};
