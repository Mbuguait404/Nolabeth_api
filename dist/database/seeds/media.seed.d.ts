import { Connection } from 'mongoose';
export declare const mediaItems: {
    type: string;
    url: string;
    thumbnail: string;
    title: string;
    description: string;
    category: string;
}[];
export declare function seedMedia(connection: Connection): Promise<void>;
