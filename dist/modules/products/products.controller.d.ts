import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: import("./entities/product.entity").Product[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    create(dto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    update(id: string, dto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
