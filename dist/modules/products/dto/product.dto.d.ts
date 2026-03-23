import { ProductBadge, StockStatus } from '../entities/product.entity';
export declare class CreateProductDto {
    name: string;
    description: string;
    price_kes: number;
    category: string;
    image_url?: string;
    badge?: ProductBadge;
    stock_status?: StockStatus;
    rating?: number;
    features?: string[];
    details?: string;
    is_active?: boolean;
}
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
