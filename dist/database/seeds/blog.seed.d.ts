import { Connection } from 'mongoose';
export declare const blogPosts: {
    slug: string;
    title: string;
    excerpt: string;
    content_rich_text: string;
    author_name: string;
    published_date: string;
    read_time: string;
    category: string;
    featured_image_url: string;
    is_featured: boolean;
    is_published: boolean;
}[];
export declare function seedBlogs(connection: Connection): Promise<void>;
