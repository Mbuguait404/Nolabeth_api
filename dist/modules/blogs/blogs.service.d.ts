import { Repository } from 'typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class BlogsService {
    private blogsRepo;
    constructor(blogsRepo: Repository<BlogPost>);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: BlogPost[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<BlogPost>;
    findBySlug(slug: string): Promise<BlogPost>;
    create(dto: CreateBlogPostDto): Promise<BlogPost>;
    update(id: string, dto: UpdateBlogPostDto): Promise<BlogPost>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        total: number;
        published: number;
        drafts: number;
        featured: number;
    }>;
}
