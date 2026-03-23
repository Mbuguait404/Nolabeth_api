"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/nolabeth_db',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'fallback_secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },
    cors: {
        allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:3001').split(','),
    },
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
});
//# sourceMappingURL=configuration.js.map