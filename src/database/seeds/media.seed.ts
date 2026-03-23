import { Connection } from 'mongoose';
import { MediaSchema } from '../../modules/resources/schemas/media.schema';

export const mediaItems = [
  { type: 'image', url: '/images/garden-sanctuary.jpg', thumbnail: '/images/garden-sanctuary.jpg', title: 'Serene Sanctuary', description: 'A moment of peace in our therapeutic garden.', category: 'Environment' },
  { type: 'image', url: '/images/wellness-space.jpg', thumbnail: '/images/wellness-space.jpg', title: 'The Safe Space', description: 'Where healing conversations begin.', category: 'Clinic' },
  { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-breathing-exercises-4444-large.mp4', thumbnail: '/images/hero-lotus.jpg', title: 'Morning Mindfulness', description: 'A quick 1-minute breathing exercise for clarity.', category: 'Short Form' },
  { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-meditating-in-the-forest-4432-large.mp4', thumbnail: '/images/forest-path.jpg', title: 'Nature Connection', description: 'Finding grounding through nature walk.', category: 'Short Form' },
  { type: 'image', url: '/images/cozy-study.png', thumbnail: '/images/cozy-study.png', title: 'Growth Tools', description: 'Our collection of journals and resources.', category: 'Resources' },
  { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-writing-in-a-notebook-4437-large.mp4', thumbnail: '/images/wisdom-book.jpg', title: 'Journaling Tips', description: 'How to start your daily reflection practice.', category: 'Tutorial' },
];

export async function seedMedia(connection: Connection) {
  const MediaModel = connection.model('Media', MediaSchema);
  await MediaModel.deleteMany({});
  await MediaModel.insertMany(mediaItems);
  console.log(`✅ Seeded media items`);
}
