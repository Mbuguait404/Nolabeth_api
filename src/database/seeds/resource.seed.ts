import { Connection } from 'mongoose';
import { ResourceSchema, ResourceType } from '../../modules/resources/schemas/resource.schema';

export const resources = [
  {
    title: 'Self-Care Guide',
    description: 'A comprehensive guide to building healthy self-care habits and routines.',
    type: ResourceType.PDF,
    file_url: 'https://example.com/resources/self-care-guide.pdf',
    size_info: '2.4 MB',
    category: 'Self-Care',
  },
  {
    title: 'Understanding Anxiety',
    description: 'Learn about anxiety, its triggers, and evidence-based coping strategies.',
    type: ResourceType.EBOOK,
    file_url: 'https://example.com/resources/understanding-anxiety.pdf',
    size_info: '4.1 MB',
    category: 'Therapy Tools',
  },
  {
    title: 'Breathing Techniques',
    description: 'Guided video tutorials for relaxation and stress management.',
    type: ResourceType.VIDEO,
    file_url: 'https://example.com/resources/breathing-techniques.mp4',
    size_info: '15 min',
    category: 'Virtual Session',
  },
  {
    title: 'Meditation Audio',
    description: 'Calming guided meditations for sleep, focus, and relaxation.',
    type: ResourceType.AUDIO,
    file_url: 'https://example.com/resources/meditation-audio.mp3',
    size_info: '45 min',
    category: 'Virtual Session',
  },
  {
    title: 'Family Communication Toolkit',
    description: 'Practical tools for improving family relationships and communication.',
    type: ResourceType.PDF,
    file_url: 'https://example.com/resources/family-toolkit.pdf',
    size_info: '3.2 MB',
    category: 'Therapy Tools',
  },
  {
    title: 'Teen Wellness Handbook',
    description: 'A guide for teenagers on navigating emotions and building resilience.',
    type: ResourceType.EBOOK,
    file_url: 'https://example.com/resources/teen-wellness.pdf',
    size_info: '5.8 MB',
    category: 'Therapy Tools',
  },
];

export async function seedResources(connection: Connection) {
  const ResourceModel = connection.model('Resource', ResourceSchema);
  
  await ResourceModel.deleteMany({});
  console.log('🗑️  Cleaned resources collection');

  const created = await ResourceModel.insertMany(resources);
  console.log(`✅ Seeded ${created.length} resources`);
}
