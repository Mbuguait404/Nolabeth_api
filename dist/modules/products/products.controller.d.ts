import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/product.schema").Product & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/product.schema").Product & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/product.schema").Product & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/product.schema").Product & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
