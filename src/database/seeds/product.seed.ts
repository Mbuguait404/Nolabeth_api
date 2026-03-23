import { Connection } from 'mongoose';
import { ProductSchema, ProductBadge, StockStatus } from '../../modules/products/schemas/product.schema';

export const products = [
  {
    name: 'Healing Journey Journal',
    description: 'A guided journal for self-reflection and personal growth.',
    price_kes: 1500,
    category: 'Journals',
    image_url: 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?auto=format&fit=crop&w=800&q=80',
    badge: ProductBadge.BESTSELLER,
    stock_status: StockStatus.IN_STOCK,
    rating: 4.9,
    review_count: 45,
    features: ['180+ guided prompts', 'Hardcover Linen', 'Daily gratitude section', 'Habit tracker'],
    details: 'The Healing Journey Journal is more than just a notebook. It is a companion for your mental health journey. Featuring curated prompts designed by therapists, it helps you dive deep into self-reflection and fosters a positive habit of daily gratitude.',
  },
  {
    name: 'Mindfulness Meditation Cards',
    description: '52 cards with daily mindfulness exercises and affirmations.',
    price_kes: 2000,
    category: 'Wellness',
    image_url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d1fd?auto=format&fit=crop&w=800&q=80',
    badge: null,
    stock_status: StockStatus.IN_STOCK,
    rating: 4.8,
    review_count: 32,
    features: ['52 high-quality cards', 'Gold-foiled edges', 'Practical exercises', 'Travel-friendly size'],
    details: 'Carry mindfulness with you wherever you go. These 52 cards provide digestible exercises and powerful affirmations to help you ground yourself throughout the day. Perfect for beginners and seasoned practitioners alike.',
  },
  {
    name: 'Anxiety Relief Workbook',
    description: 'Practical exercises and strategies for managing anxiety.',
    price_kes: 1800,
    category: 'Books',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80',
    badge: ProductBadge.NEW,
    stock_status: StockStatus.IN_STOCK,
    rating: 4.7,
    review_count: 28,
    features: ['CBT-based techniques', 'Interactive exercises', 'Expert advice', 'Progress trackers'],
    details: 'This workbook takes a practical, evidence-based approach to managing anxiety. Through Cognitive Behavioral Therapy (CBT) techniques and interactive prompts, you will learn to identify triggers and build a toolkit of healthy coping mechanisms.',
  },
  {
    name: 'Self-Care Planner',
    description: 'A 12-month planner designed for holistic wellness.',
    price_kes: 2500,
    category: 'Journals',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    badge: null,
    stock_status: StockStatus.IN_STOCK,
    rating: 4.9,
    review_count: 56,
    features: ['Monthly goal settings', 'Wellness checklists', 'Habit trackers', 'Monthly reflection'],
    details: 'Plan your way to holistic wellness. This 12-month planner is designed to help you integrate self-care into your busy schedule. Track your sleep, water intake, and emotional wellbeing while staying organized with your daily tasks.',
  },
  {
    name: 'Guided Meditation Audio Collection',
    description: '10 guided meditations for sleep, stress relief, and focus.',
    price_kes: 1200,
    category: 'Digital',
    image_url: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80',
    badge: ProductBadge.DIGITAL,
    stock_status: StockStatus.IN_STOCK,
    rating: 4.6,
    review_count: 19,
    features: ['Lifetime access', 'High-quality audio', 'Varied lengths (5-20 mins)', 'Offline listening ready'],
    details: 'Find your peace in the noise. This digital collection offers 10 professionally recorded meditations that address different mental states. Whether you need a quick 5-minute reset or a 20-minute deep sleep guide, this collection has you covered.',
  },
  {
    name: 'Wellness Starter Kit',
    description: 'Complete kit with journal, candles, and self-care essentials.',
    price_kes: 4500,
    category: 'Gift Sets',
    image_url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    badge: ProductBadge.POPULAR,
    stock_status: StockStatus.IN_STOCK,
    rating: 5.0,
    review_count: 12,
    features: ['Healing Journey Journal', 'Scented Coconut Wax Candle', 'Wellness Cards', 'Gift-ready packaging'],
    details: 'The ultimate gift for yourself or a loved one. The Wellness Starter Kit bundles our most popular items into a beautifully packaged set designed to kickstart anyone\'s wellness journey.',
  },
];

export async function seedProducts(connection: Connection) {
  const ProductModel = connection.model('Product', ProductSchema);
  
  await ProductModel.deleteMany({});
  console.log('🗑️  Cleaned products collection');

  const created = await ProductModel.insertMany(products);
  console.log(`✅ Seeded ${created.length} products`);
}
