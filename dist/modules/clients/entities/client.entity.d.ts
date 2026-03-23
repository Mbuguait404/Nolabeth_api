export declare enum InquiryType {
    COUNSELING = "Counseling",
    WORKSHOP = "Workshop",
    GENERAL = "General"
}
export declare enum ClientStatus {
    NEW = "New",
    IN_PROGRESS = "In-Progress",
    COMPLETED = "Completed"
}
export declare class Client {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    inquiry_type: InquiryType;
    notes: string;
    status: ClientStatus;
    source: string;
    created_at: Date;
    updated_at: Date;
}
