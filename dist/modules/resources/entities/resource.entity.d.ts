export declare enum ResourceType {
    PDF = "PDF",
    VIDEO = "Video",
    AUDIO = "Audio",
    EBOOK = "E-Book"
}
export declare class Resource {
    id: string;
    title: string;
    description: string;
    type: ResourceType;
    file_url: string;
    size_info: string;
    category: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
