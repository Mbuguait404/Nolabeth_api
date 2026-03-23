"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stories = void 0;
exports.seedStories = seedStories;
const story_schema_1 = require("../../modules/resources/schemas/story.schema");
exports.stories = [
    {
        title: 'A Journey Through Unimaginable Loss',
        subtitle: 'Rising from the Ashes of Grief',
        author: 'Linda Atieno',
        category: 'Resilience',
        videoId: 'Ybj2y7UWc3g',
        summary: 'Linda Atieno shares her journey from the depths of despair to finding a new lens of faith after losing four siblings and both parents.',
        quote: "God is a farmer... and when he chooses, he chooses the best for himself.",
        sections: [
            { title: 'The First Blow: Losing Mom', content: 'While away at a boarding school, Linda received the devastating news that her mother had passed away.', timestamp: '16:00' },
            { title: 'Rising from the Ashes', content: 'Linda found a way to move forward through her faith, writing letters to God and her family.', timestamp: '45:45' }
        ]
    },
    {
        title: 'A Second Chance at Education',
        subtitle: 'It\'s Never Too Late to Follow Your Dreams',
        author: 'Rachel Mwangi',
        category: 'Persistence',
        videoId: 'yxL0e1C-RXI',
        summary: 'For nearly twenty years, the dream of higher education seemed like a distant memory for Rachel Mwangi. Life had a different plan—a second chance that began in the most unexpected place.',
        quote: "In the midst of no matter how ugly it looks... God is in your life in every situation.",
        sections: [
            { title: 'The Turning Point: Serving with Purpose', content: 'While navigating the painful separation from her husband in 2018, Rachel found herself sitting in a hospital corridor.', timestamp: '10:55' },
            { title: 'A Story of Resilience', content: 'Rachel persevered, finding a supportive community within her classmates.', timestamp: '1:01:16' }
        ]
    },
    {
        title: 'From Trauma to Forgiveness',
        subtitle: 'Healing the Scars of the Past',
        author: 'Eunice Adhiambo',
        category: 'Forgiveness',
        videoId: 'dDIho32hR7s',
        summary: 'Eunice Adhiambo lived with a secret hidden on her left hand—a jagged scar from a childhood trauma. Her journey toward reconciliation and forgiveness offers a powerful light for others.',
        quote: "Unforgiveness is like drinking poison and expecting the other person to die.",
        sections: [
            { title: 'The Hidden Secret', content: 'For years, Eunice Adhiambo lived with a secret hidden right on her left hand—a jagged scar from a childhood trauma.', timestamp: '9:57' },
            { title: 'The Journey Toward Forgiveness', content: 'Through deliberate action, she embarked on a difficult journey toward forgiveness.', timestamp: '30:26' }
        ]
    }
];
async function seedStories(connection) {
    const StoryModel = connection.model('Story', story_schema_1.StorySchema);
    await StoryModel.deleteMany({});
    await StoryModel.insertMany(exports.stories);
    console.log(`✅ Seeded stories`);
}
//# sourceMappingURL=story.seed.js.map