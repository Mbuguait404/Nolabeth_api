import { Model } from 'mongoose';
import { BlogPost, BlogPostDocument } from './schemas/blog-post.schema';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class BlogsService {
    private blogModel;
    constructor(blogModel: Model<BlogPostDocument>);
    findAll(pagination: PaginationDto & {
        category?: string;
    }): Promise<{
        data: (import("mongoose").Document<unknown, {}, BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findBySlug(slug: string): Promise<import("mongoose").Document<unknown, {}, BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    create(dto: CreateBlogPostDto): Promise<import("mongoose").Document<unknown, {}, BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, dto: UpdateBlogPostDto): Promise<import("mongoose").Document<unknown, {}, BlogPostDocument, {}, import("mongoose").DefaultSchemaOptions> & BlogPost & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
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
