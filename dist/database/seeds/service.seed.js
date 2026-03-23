"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
exports.seedServices = seedServices;
const therapy_service_schema_1 = require("../../modules/services/schemas/therapy-service.schema");
exports.services = [
    {
        title: 'Personal Therapy',
        description: 'Individual sessions for deep self-reflection and healing. We focus on enhancing self-confidence, stress management, and emotional resilience.',
        long_description: 'Personal therapy at NOLABETH is a dedicated space for your inner growth. We work with you to navigate life\'s complexities, helping you build a stronger sense of self and the emotional tools needed to thrive in any environment.',
        features: [
            'Personalized healing plans',
            'Confidential self-exploration',
            'Coping strategies for anxiety',
            'Emotional resilience building',
        ],
        benefits: [
            'Improved self-awareness',
            'Greater emotional regulation',
            'Enhanced confidence',
            'Better life-work balance'
        ],
        process_steps: [
            { title: 'Initial Consultation', description: 'Understanding your unique needs and setting goals.' },
            { title: 'Safe Exploration', description: 'Diving deep into your thoughts and feelings in a secure space.' },
            { title: 'Tool Development', description: 'Acquiring practical psychological techniques.' },
            { title: 'Transformation', description: 'Integrating changes for a more fulfilling life.' }
        ],
        color_class: 'from-lapis/10 to-lapis/5',
        icon_identifier: 'User',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917963843-freepik__a-black-woman-sitting-by-a-window-with-sunlight-ge__58932%20(1).png',
        priority_order: 1,
    },
    {
        title: 'Trauma Counseling',
        description: 'Specialized support for healing from past wounds. We help you reclaim your power and break free from the cycles of trauma.',
        long_description: 'Trauma can leave deep scars that affect every aspect of life. Our trauma-informed care focuses on safety, empowerment, and gradual healing, allowing you to process past experiences without being overwhelmed by them.',
        features: [
            'Trauma-informed therapeutic approach',
            'Safe and regulated environment',
            'Processing deep-seated wounds',
            'Empowerment-based recovery',
        ],
        benefits: [
            'Reduced trauma symptoms',
            'Reclaimed sense of agency',
            'Breakage of toxic cycles',
            'Restored peace of mind'
        ],
        process_steps: [
            { title: 'Safety First', description: 'Establishing a secure environment and stabilization.' },
            { title: 'Gentle Processing', description: 'Safely addressing past experiences at your pace.' },
            { title: 'Integration', description: 'Making sense of your story within a new framework.' },
            { title: 'Empowerment', description: 'Moving from victimhood to victorious living.' }
        ],
        color_class: 'from-lapis/10 to-lapis/5',
        icon_identifier: 'Shield',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917036532-freepik__a-black-young-woman-wearing-casual-clothes-with-br__77675.png',
        priority_order: 2,
    },
    {
        title: 'Addiction Counseling',
        description: 'Compassionate support for recovery from substance and behavioral addictions. Focus on lasting change and holistic wellbeing.',
        long_description: 'Recovery is a journey of rediscovering your worth. We provide the support and accountability needed to overcome addiction, addressing both the symptoms and the underlying causes in a non-judgmental atmosphere.',
        features: [
            'Relapse prevention strategies',
            'Root cause analysis',
            'Supportive accountability',
            'Lifestyle redesign',
        ],
        benefits: [
            'Sustained sobriety/control',
            'Mended relationships',
            'Restored physical health',
            'Renewed sense of purpose'
        ],
        process_steps: [
            { title: 'Assessment', description: 'Clear understanding of the addiction and its impact.' },
            { title: 'Stabilization', description: 'Immediate tools for management and safety.' },
            { title: 'Inner Work', description: 'Addressing the voids the addiction was Filling.' },
            { title: 'New Foundation', description: 'Building a life where addiction has no room.' }
        ],
        color_class: 'from-lapis/10 to-lapis/5',
        icon_identifier: 'Activity',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917243211-freepik__a-dimly-lit-bar-scene-shows-a-young-black-man-seat__80927.png',
        priority_order: 3,
    },
    {
        title: 'Premarital Counseling',
        description: 'Setting a firm foundation for your future together. Explore communication, values, and expectations before the big day.',
        long_description: 'Prepare for a lifetime of love and understanding. Our premarital sessions provide a structured way for couples to discuss the "big questions" and build the skills needed for a resilient partnership.',
        features: [
            'Communication skill building',
            'Financial planning discussion',
            'Value alignment exercises',
            'Conflict resolution tools',
        ],
        benefits: [
            'Stronger relationship foundation',
            'Clearer mutual expectations',
            'Pre-empting common pitfalls',
            'Increased marital confidence'
        ],
        process_steps: [
            { title: 'Connection', description: 'Aligning on your vision for marriage.' },
            { title: 'Deep Dive', description: 'Discussing values, finances, and family.' },
            { title: 'Skills Prep', description: 'Learning how to fight fair and love well.' },
            { title: 'Action Plan', description: 'Creating a roadmap for your life together.' }
        ],
        color_class: 'from-gold/10 to-gold/5',
        icon_identifier: 'Zap',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917369809-freepik__a-black-couple-sits-together-on-a-comfortable-couc__58937.png',
        priority_order: 4,
    },
    {
        title: 'Couples & Marriage Counseling',
        description: 'Improving communication and deepening connection. We help partners navigate conflicts and rebuild trust.',
        long_description: 'Every relationship faces challenges. We offer a neutral, empathetic space for partners to hear each other deeply, heal past hurts, and rediscover the joy of their connection.',
        features: [
            'Neutral facilitation',
            'EFT (Emotionally Focused Therapy)',
            'Trust rebuilding protocols',
            'Conflict de-escalation',
        ],
        benefits: [
            'Deepened intimacy',
            'Resolved long-standing conflicts',
            'Improved daily communication',
            'Strategic partnership growth'
        ],
        process_steps: [
            { title: 'De-escalation', description: 'Reducing immediate tension and conflict.' },
            { title: 'Observation', description: 'Identifying the negative cycles you get stuck in.' },
            { title: 'Repair', description: 'Actively working to mend emotional wounds.' },
            { title: 'Bonding', description: 'Creating new, positive ways of connecting.' }
        ],
        color_class: 'from-gold/10 to-gold/5',
        icon_identifier: 'Heart',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917513563-freepik__a-black-mothershort-hair-father-and-their-young-so__77670.png',
        priority_order: 5,
    },
    {
        title: 'Divorce Recovery',
        description: 'Healing and finding yourself again after separation or divorce. Support for the emotional and practical transitions.',
        long_description: 'Separation is a significant life transition. We provide the emotional support and practical guidance needed to navigate the grief, rebuild your identity, and move forward with hope.',
        features: [
            'Grief processing',
            'Identity reconstruction',
            'Co-parenting guidance',
            'Stress management',
        ],
        benefits: [
            'Healthy grief processing',
            'Reduced bitterness and shame',
            'Clear path forward',
            'Stable transition for children'
        ],
        process_steps: [
            { title: 'Acknowledging', description: 'Giving space to the pain and loss.' },
            { title: 'Processing', description: 'Untangling the complex emotions involved.' },
            { title: 'Rediscovery', description: 'Finding out who you are as an individual again.' },
            { title: 'Emerging', description: 'Stepping into your new chapter with strength.' }
        ],
        color_class: 'from-gold/10 to-gold/5',
        icon_identifier: 'HeartHandshake',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917903929-freepik__a-black-woman-stands-by-an-open-window-with-light-__80929.png',
        priority_order: 6,
    },
    {
        title: 'Workplace Mental Health Support',
        description: 'Customized mental health strategies for organizations. We help you create a culture of care and productivity.',
        long_description: 'A healthy workplace is a productive one. We partner with organizations to implement wellness strategies that reduce burnout, improve morale, and support the mental wellbeing of every team member.',
        features: [
            'Policy development support',
            'Manager training',
            'Employee support programs',
            'Stress audits',
        ],
        benefits: [
            'Reduced employee turnover',
            'Increased productivity',
            'Better workplace culture',
            'Lower absenteeism'
        ],
        process_steps: [
            { title: 'Consultation', description: 'Understanding your organizational culture.' },
            { title: 'Analysis', description: 'Identifying key stressors and pain points.' },
            { title: 'Implementation', description: 'Rolling out tailored wellness initiatives.' },
            { title: 'Evaluation', description: 'Measuring impact and refining strategies.' }
        ],
        color_class: 'from-lapis/10 to-lapis/5',
        icon_identifier: 'Users2',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773915874591-freepik__a-black-professional-sits-alone-at-a-desk-in-an-of__80923.png',
        priority_order: 7,
    },
    {
        title: 'Corporate Training & Resilience Workshops',
        description: 'Dynamic workshops on mental health, resilience, and leadership. Empowering your team to thrive.',
        long_description: 'Our workshops are interactive, evidence-based, and designed for immediate impact. We cover topics from emotional intelligence to resilient leadership, giving your team the tools they need to succeed.',
        features: [
            'Interactive session design',
            'Evidence-based content',
            'Tailored workshop topics',
            'Practical takeaway tools',
        ],
        benefits: [
            'Boosted team morale',
            'Developed leadership skills',
            'Improved emotional intelligence',
            'Enhanced organizational resilience'
        ],
        process_steps: [
            { title: 'Goal Setting', description: 'Defining the learning outcomes you need.' },
            { title: 'Design', description: 'Creating a bespoke workshop experience.' },
            { title: 'Delivery', description: 'Engaging, expert-led training sessions.' },
            { title: 'Follow-up', description: 'Ensuring new skills are applied and sustained.' }
        ],
        color_class: 'from-lapis/10 to-lapis/5',
        icon_identifier: 'CalendarDays',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773916048500-freepik__a-modern-office-training-session-with-a-group-of-b__80924.png',
        priority_order: 8,
    },
    {
        title: 'Online Therapy (Teletherapy)',
        description: 'Expert therapy from the comfort of your home. Secure, private, and accessible wherever you are.',
        long_description: 'Accessibility is key to wellness. Our secure video platform allows you to engage in high-quality therapy without the need for travel, making it easier to fit mental health support into your busy life.',
        features: [
            'Secure, encrypted platform',
            'Global accessibility',
            'Flexible time slots',
            'No commute required',
        ],
        benefits: [
            'Maximum convenience',
            'Privacy and comfort',
            'Access to specialized care',
            'Consistency in sessions'
        ],
        process_steps: [],
        color_class: 'from-accent-calm/10 to-accent-calm/5',
        icon_identifier: 'Video',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773917817629-freepik__a-softly-lit-home-interior-viewed-from-a-thirdpers__80928.png',
        priority_order: 9,
    },
    {
        title: 'Group Support Sessions',
        description: 'Healing in community. Share experiences and find support among peers in a facilitated environment.',
        long_description: 'There is immense power in knowing you are not alone. Our group sessions bring together people facing similar challenges, providing a supportive community where you can share, learn, and grow together.',
        features: [
            'Expert facilitation',
            'Shared peer perspectives',
            'Affordable support option',
            'Safe community space',
        ],
        benefits: [
            'Reduced social isolation',
            'Diverse peer insights',
            'Skill practice in safe space',
            'Collective wisdom and healing'
        ],
        process_steps: [],
        color_class: 'from-accent-warm/10 to-accent-warm/5',
        icon_identifier: 'Users',
        image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773918247505-freepik__a-warm-softly-lit-room-shows-a-small-group-of-blac__80931.png',
        priority_order: 10,
    },
];
async function seedServices(connection) {
    const ServiceModel = connection.model('TherapyService', therapy_service_schema_1.TherapyServiceSchema);
    await ServiceModel.deleteMany({});
    console.log('🗑️  Cleaned services collection');
    const created = await ServiceModel.insertMany(exports.services);
    console.log(`✅ Seeded ${created.length} services`);
}
//# sourceMappingURL=service.seed.js.map