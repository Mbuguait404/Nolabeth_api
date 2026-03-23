export declare class TherapyService {
    id: string;
    title: string;
    description: string;
    long_description: string;
    features: string[];
    benefits: string[];
    icon_identifier: string;
    image_url: string;
    priority_order: number;
    is_active: boolean;
    color_class: string;
    process_steps: Array<{
        title: string;
        description: string;
    }>;
    created_at: Date;
    updated_at: Date;
}
