export declare class CreateBlogPostDto {
    title: string;
    slug?: string;
    author_name: string;
    published_date?: string;
    read_time?: string;
    category?: string;
    excerpt?: string;
    content_rich_text: string;
    featured_image_url?: string;
    is_featured?: boolean;
    is_published?: boolean;
    tags?: string[];
}
declare const UpdateBlogPostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBlogPostDto>>;
export declare class UpdateBlogPostDto extends UpdateBlogPostDto_base {
}
export {};
