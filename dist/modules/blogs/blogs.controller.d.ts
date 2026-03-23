import { BlogsService } from './blogs.service';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: import("./entities/blog-post.entity").BlogPost[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/blog-post.entity").BlogPost>;
    findBySlug(slug: string): Promise<import("./entities/blog-post.entity").BlogPost>;
    create(dto: CreateBlogPostDto): Promise<import("./entities/blog-post.entity").BlogPost>;
    update(id: string, dto: UpdateBlogPostDto): Promise<import("./entities/blog-post.entity").BlogPost>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
