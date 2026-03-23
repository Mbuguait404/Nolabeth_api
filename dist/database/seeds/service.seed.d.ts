import { Connection } from 'mongoose';
export declare const services: {
    title: string;
    description: string;
    long_description: string;
    features: string[];
    benefits: string[];
    process_steps: {
        title: string;
        description: string;
    }[];
    color_class: string;
    icon_identifier: string;
    image_url: string;
    priority_order: number;
}[];
export declare function seedServices(connection: Connection): Promise<void>;
