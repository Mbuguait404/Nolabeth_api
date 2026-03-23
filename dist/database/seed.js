"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = __importStar(require("bcrypt"));
const admin_user_schema_1 = require("../auth/schemas/admin-user.schema");
const blog_seed_1 = require("./seeds/blog.seed");
const event_seed_1 = require("./seeds/event.seed");
const service_seed_1 = require("./seeds/service.seed");
const product_seed_1 = require("./seeds/product.seed");
const resource_seed_1 = require("./seeds/resource.seed");
const media_seed_1 = require("./seeds/media.seed");
const story_seed_1 = require("./seeds/story.seed");
const SUPERADMIN_NAME = 'Liz Odwallo';
const SUPERADMIN_EMAIL = 'admin@nolabeth.com';
const SUPERADMIN_PASSWORD = '12345678';
async function seed() {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error('❌ MONGODB_URI not found in .env');
        process.exit(1);
    }
    console.log('⏳ Connecting to MongoDB...');
    await mongoose_1.default.connect(mongoUri);
    console.log('✅ Connected');
    const connection = mongoose_1.default.connection;
    console.log('\n👤 Seeding SuperAdmin...');
    const AdminModel = connection.model('AdminUser', admin_user_schema_1.AdminUserSchema);
    const existing = await AdminModel.findOne({ email: SUPERADMIN_EMAIL });
    if (existing) {
        console.log('⚠️  SuperAdmin already exists, skipping.');
    }
    else {
        const hashedPassword = await bcrypt.hash(SUPERADMIN_PASSWORD, 12);
        await AdminModel.create({
            name: SUPERADMIN_NAME,
            email: SUPERADMIN_EMAIL,
            password_hash: hashedPassword,
            role: admin_user_schema_1.AdminRole.SUPER_ADMIN,
        });
        console.log('✅ SuperAdmin created:');
        console.log(`   Email   : ${SUPERADMIN_EMAIL}`);
        console.log(`   Password: ${SUPERADMIN_PASSWORD}`);
    }
    console.log('\n📝 Seeding Blogs...');
    await (0, blog_seed_1.seedBlogs)(connection);
    console.log('\n📅 Seeding Events...');
    await (0, event_seed_1.seedEvents)(connection);
    console.log('\n💆 Seeding Services...');
    await (0, service_seed_1.seedServices)(connection);
    console.log('\n🛒 Seeding Products...');
    await (0, product_seed_1.seedProducts)(connection);
    console.log('\n📚 Seeding Resources...');
    await (0, resource_seed_1.seedResources)(connection);
    console.log('\n🎬 Seeding Media...');
    await (0, media_seed_1.seedMedia)(connection);
    console.log('\n📖 Seeding Stories...');
    await (0, story_seed_1.seedStories)(connection);
    await mongoose_1.default.disconnect();
    console.log('\n🎉 ALL SEEDING COMPLETE!');
}
seed().catch((err) => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map