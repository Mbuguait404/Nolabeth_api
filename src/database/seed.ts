import 'dotenv/config';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { AdminUserSchema, AdminRole } from '../auth/schemas/admin-user.schema';
import { seedBlogs } from './seeds/blog.seed';
import { seedEvents } from './seeds/event.seed';
import { seedServices } from './seeds/service.seed';
import { seedProducts } from './seeds/product.seed';
import { seedResources } from './seeds/resource.seed';
import { seedMedia } from './seeds/media.seed';
import { seedStories } from './seeds/story.seed';

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
  await mongoose.connect(mongoUri);
  console.log('✅ Connected');

  const connection = mongoose.connection;

  // 1. Seed SuperAdmin
  console.log('\n👤 Seeding SuperAdmin...');
  const AdminModel = connection.model('AdminUser', AdminUserSchema);
  const existing = await AdminModel.findOne({ email: SUPERADMIN_EMAIL });

  if (existing) {
    console.log('⚠️  SuperAdmin already exists, skipping.');
  } else {
    const hashedPassword = await bcrypt.hash(SUPERADMIN_PASSWORD, 12);
    await AdminModel.create({
      name: SUPERADMIN_NAME,
      email: SUPERADMIN_EMAIL,
      password_hash: hashedPassword,
      role: AdminRole.SUPER_ADMIN,
    });

    console.log('✅ SuperAdmin created:');
    console.log(`   Email   : ${SUPERADMIN_EMAIL}`);
    console.log(`   Password: ${SUPERADMIN_PASSWORD}`);
  }

  // 2. Seed Blogs
  console.log('\n📝 Seeding Blogs...');
  await seedBlogs(connection);

  // 3. Seed Events
  console.log('\n📅 Seeding Events...');
  await seedEvents(connection);

  // 4. Seed Services
  console.log('\n💆 Seeding Services...');
  await seedServices(connection);

  // 5. Seed Products
  console.log('\n🛒 Seeding Products...');
  await seedProducts(connection);

  // 6. Seed Resources
  console.log('\n📚 Seeding Resources...');
  await seedResources(connection);

  // 7. Seed Media
  console.log('\n🎬 Seeding Media...');
  await seedMedia(connection);

  // 8. Seed Stories
  console.log('\n📖 Seeding Stories...');
  await seedStories(connection);

  await mongoose.disconnect();
  console.log('\n🎉 ALL SEEDING COMPLETE!');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
