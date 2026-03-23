import { Connection } from 'mongoose';
import { ProductBadge, StockStatus } from '../../modules/products/schemas/product.schema';
export declare const products: ({
    name: string;
    description: string;
    price_kes: number;
    category: string;
    image_url: string;
    badge: ProductBadge;
    stock_status: StockStatus;
    rating: number;
    review_count: number;
    features: string[];
    details: string;
} | {
    name: string;
    description: string;
    price_kes: number;
    category: string;
    image_url: string;
    badge: null;
    stock_status: StockStatus;
    rating: number;
    review_count: number;
    features: string[];
    details: string;
})[];
export declare function seedProducts(connection: Connection): Promise<void>;
