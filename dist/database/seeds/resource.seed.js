"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resources = void 0;
exports.seedResources = seedResources;
const resource_schema_1 = require("../../modules/resources/schemas/resource.schema");
exports.resources = [
    {
        title: 'Self-Care Guide',
        description: 'A comprehensive guide to building healthy self-care habits and routines.',
        type: resource_schema_1.ResourceType.PDF,
        file_url: 'https://example.com/resources/self-care-guide.pdf',
        size_info: '2.4 MB',
        category: 'Self-Care',
    },
    {
        title: 'Understanding Anxiety',
        description: 'Learn about anxiety, its triggers, and evidence-based coping strategies.',
        type: resource_schema_1.ResourceType.EBOOK,
        file_url: 'https://example.com/resources/understanding-anxiety.pdf',
        size_info: '4.1 MB',
        category: 'Therapy Tools',
    },
    {
        title: 'Breathing Techniques',
        description: 'Guided video tutorials for relaxation and stress management.',
        type: resource_schema_1.ResourceType.VIDEO,
        file_url: 'https://example.com/resources/breathing-techniques.mp4',
        size_info: '15 min',
        category: 'Virtual Session',
    },
    {
        title: 'Meditation Audio',
        description: 'Calming guided meditations for sleep, focus, and relaxation.',
        type: resource_schema_1.ResourceType.AUDIO,
        file_url: 'https://example.com/resources/meditation-audio.mp3',
        size_info: '45 min',
        category: 'Virtual Session',
    },
    {
        title: 'Family Communication Toolkit',
        description: 'Practical tools for improving family relationships and communication.',
        type: resource_schema_1.ResourceType.PDF,
        file_url: 'https://example.com/resources/family-toolkit.pdf',
        size_info: '3.2 MB',
        category: 'Therapy Tools',
    },
    {
        title: 'Teen Wellness Handbook',
        description: 'A guide for teenagers on navigating emotions and building resilience.',
        type: resource_schema_1.ResourceType.EBOOK,
        file_url: 'https://example.com/resources/teen-wellness.pdf',
        size_info: '5.8 MB',
        category: 'Therapy Tools',
    },
];
async function seedResources(connection) {
    const ResourceModel = connection.model('Resource', resource_schema_1.ResourceSchema);
    await ResourceModel.deleteMany({});
    console.log('🗑️  Cleaned resources collection');
    const created = await ResourceModel.insertMany(exports.resources);
    console.log(`✅ Seeded ${created.length} resources`);
}
//# sourceMappingURL=resource.seed.js.map