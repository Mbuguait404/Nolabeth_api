export declare enum TemplateCategory {
    SECURITY = "security",
    MARKETING = "marketing",
    ONBOARDING = "Onboarding",
    NOTIFICATIONS = "notifications",
    TRANSACTIONAL = "transactional"
}
export declare enum MessageChannel {
    EMAIL = "email",
    SMS = "sms"
}
export declare class CreateTemplateDto {
    name: string;
    channel: MessageChannel;
    category: TemplateCategory;
    content: string;
    subject?: string;
    description?: string;
}
