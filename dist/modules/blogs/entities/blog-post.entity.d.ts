export declare class BlogPost {
    id: string;
    title: string;
    slug: string;
    author_name: string;
    published_date: string;
    read_time: string;
    category: string;
    excerpt: string;
    content_rich_text: string;
    featured_image_url: string;
    is_featured: boolean;
    is_published: boolean;
    created_at: Date;
    updated_at: Date;
    generateSlug(): void;
}
