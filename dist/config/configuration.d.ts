declare const _default: () => {
    port: number;
    nodeEnv: string;
    database: {
        uri: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    cors: {
        allowedOrigins: string[];
    };
    cloudinary: {
        cloudName: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
    };
};
export default _default;
