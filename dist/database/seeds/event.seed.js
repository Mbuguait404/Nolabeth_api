"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upcomingEvents = void 0;
exports.seedEvents = seedEvents;
const event_schema_1 = require("../../modules/events/schemas/event.schema");
exports.upcomingEvents = [
    {
        title: 'Noble Lazuli & Beyond Therapy Counselling Program (Cohort 2)',
        slug: 'noble-lazuli-beyond-therapy-counselling-program-cohort-2',
        date: 'April 2026',
        time_range: '6-Week Program',
        location: 'Online Service',
        description: 'A transformative six-week program designed to deliver real clarity, mental fitness, and a personalized roadmap for your unique vision.',
        long_description: 'The Noble Lazuli & Beyond Therapy Counselling six-weeks Program for cohort 2 commences in April. This program is designed to deliver real clarity and transformation. We are confident it will be worth every coin—and if you do not receive value, we will refund your payment. Early Bird Offer: The full program value is KES 10,000, but we are giving an offer for early registration: KES 5,000 / 40 USD.',
        capacity: 50,
        price_kes: 'KES 5,000 / $40',
        image_url: '/images/cohort-program.png',
        category: event_schema_1.EventCategory.COHORT,
        status: event_schema_1.EventStatus.UPCOMING,
        features: [
            'Understanding of your strengths, gifts, and talents',
            'Insight into your weaknesses and gaps',
            'New confidence through mental fitness training',
            'Personalized roadmap for your unique abilities',
            'The inspiration to launch your vision',
            'Supportive community of visionary friends',
            'Featured resources',
            'In person NOLABETH wellness conference (annually)'
        ],
        organizer_name: 'Liz Odwallo',
        organizer_role: 'NOLABETH Counselling Program',
    },
    {
        title: 'Stress Management Workshop',
        slug: 'stress-management-workshop',
        date: 'March 25, 2026',
        time_range: '10:00 AM - 2:00 PM',
        location: 'NOLABETH Wellness Center, Mombasa',
        description: 'Learn practical techniques to manage stress and build resilience in this interactive half-day workshop.',
        long_description: 'Our Stress Management Workshop is designed to provide you with a comprehensive toolkit for handling the pressures of modern life. In this intensive four-hour session, we dive deep into the physiological and psychological aspects of stress.',
        capacity: 12,
        price_kes: 'KES 2,500',
        image_url: '/images/wellness-space.jpg',
        category: event_schema_1.EventCategory.WORKSHOP,
        status: event_schema_1.EventStatus.UPCOMING,
        features: [
            'Understanding stress triggers',
            'Mindfulness-based stress reduction techniques',
            'Creating a personalized resilience plan',
            'Interactive group exercises',
            'Healthy snacks and refreshments provided'
        ],
        organizer_name: 'Dr. Elizabeth Njoki',
        organizer_role: 'Lead Psychologist',
    },
    {
        title: 'Family Communication Skills',
        slug: 'family-communication-skills',
        date: 'April 8, 2026',
        time_range: '2:00 PM - 5:00 PM',
        location: 'Online (Zoom)',
        description: 'Discover effective communication strategies to strengthen family bonds and resolve conflicts.',
        long_description: 'Healthy families are built on healthy communication. This online workshop focuses on breaking down barriers and building bridges between family members of all ages.',
        capacity: 20,
        price_kes: 'KES 1,500',
        image_url: '/images/garden-sanctuary.jpg',
        category: event_schema_1.EventCategory.VIRTUAL,
        status: event_schema_1.EventStatus.UPCOMING,
        features: [
            'Active listening techniques',
            'Non-violent communication basics',
            'Age-appropriate communication strategies',
            'Conflict resolution frameworks',
            'Digital workbook included'
        ],
        organizer_name: 'Sarah Mbandi',
        organizer_role: 'Family Counselor',
    },
    {
        title: 'Teen Mental Health Awareness',
        slug: 'teen-mental-health-awareness',
        date: 'April 15, 2026',
        time_range: '9:00 AM - 1:00 PM',
        location: 'NOLABETH Wellness Center, Mombasa',
        description: 'A special workshop for parents and educators on supporting teen mental health.',
        long_description: 'The teenage years are a critical period for mental health development. This workshop provides parents, guardians, and educators with the insights and tools needed to support adolescents effectively.',
        capacity: 15,
        price_kes: 'KES 2,000',
        image_url: '/images/forest-path.jpg',
        category: event_schema_1.EventCategory.AWARENESS,
        status: event_schema_1.EventStatus.UPCOMING,
        features: [
            'Identifying signs of anxiety and depression in teens',
            'Building trust and open dialogue',
            'Social media and mental health',
            'Local resources and support systems',
            'Q&A session with mental health specialists'
        ],
        organizer_name: 'Dr. John Mutua',
        organizer_role: 'Adolescent Specialist',
    },
];
async function seedEvents(connection) {
    const EventModel = connection.model('Event', event_schema_1.EventSchema);
    await EventModel.deleteMany({});
    console.log('🗑️  Cleaned events collection');
    const created = await EventModel.insertMany(exports.upcomingEvents);
    console.log(`✅ Seeded ${created.length} events`);
}
//# sourceMappingURL=event.seed.js.map