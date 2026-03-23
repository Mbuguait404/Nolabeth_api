import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProductsService {
    private productsRepo;
    constructor(productsRepo: Repository<Product>);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: Product[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<Product>;
    create(dto: CreateProductDto): Promise<Product>;
    update(id: string, dto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        total: number;
        active: number;
        outOfStock: number;
    }>;
}
