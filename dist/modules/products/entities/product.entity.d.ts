export declare enum ProductBadge {
    NEW = "New",
    BESTSELLER = "Bestseller",
    POPULAR = "Popular",
    DIGITAL = "Digital"
}
export declare enum StockStatus {
    IN_STOCK = "In Stock",
    OUT_OF_STOCK = "Out of Stock",
    LOW_STOCK = "Low Stock"
}
export declare class Product {
    id: string;
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
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
