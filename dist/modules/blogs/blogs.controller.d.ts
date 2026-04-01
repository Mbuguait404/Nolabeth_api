import { BlogsService } from './blogs.service';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schemas/blog-post.schema").BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/blog-post.schema").BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<any>;
    findBySlug(slug: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/blog-post.schema").BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/blog-post.schema").BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateBlogPostDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/blog-post.schema").BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/blog-post.schema").BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateBlogPostDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/blog-post.schema").BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/blog-post.schema").BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
