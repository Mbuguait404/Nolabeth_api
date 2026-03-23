import { Connection } from 'mongoose';
export declare const stories: {
    title: string;
    subtitle: string;
    author: string;
    category: string;
    videoId: string;
    summary: string;
    quote: string;
    sections: {
        title: string;
        content: string;
        timestamp: string;
    }[];
}[];
export declare function seedStories(connection: Connection): Promise<void>;
