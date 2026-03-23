export declare enum AdminRole {
    ADMIN = "Admin",
    SUPER_ADMIN = "SuperAdmin"
}
export declare class AdminUser {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    role: AdminRole;
    last_login: Date;
    created_at: Date;
    updated_at: Date;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
}
