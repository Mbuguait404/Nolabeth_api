"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogPosts = void 0;
exports.seedBlogs = seedBlogs;
const blog_post_schema_1 = require("../../modules/blogs/schemas/blog-post.schema");
exports.blogPosts = [
    {
        slug: 'understanding-healing-journey-therapy',
        title: 'Understanding the Journey of Healing: A Guide to Therapy',
        excerpt: 'Embarking on a therapeutic journey is one of the most courageous decisions you can make. This comprehensive guide explores what to expect from therapy and how to make the most of your healing process.',
        content_rich_text: `
      <p>Embarking on a therapeutic journey is one of the most courageous decisions you can make. It's an investment in your well-being, a commitment to understanding yourself, and a path toward healing and growth.</p>
      
      <h3>What is Therapy?</h3>
      <p>At its core, therapy is a collaborative process between a trained professional and an individual, couple, or family. It aims to help people navigate life's challenges, understand their emotions, and develop healthier coping mechanisms.</p>
      
      <h3>The First Step: Finding the Right Therapist</h3>
      <p>The relationship between you and your therapist is one of the most significant factors in the success of therapy. It's important to find someone you feel comfortable with, someone who listens without judgment and makes you feel seen and heard.</p>
      
      <h3>What to Expect in Your First Session</h3>
      <p>The initial session, often called an intake, is primarily an opportunity for the therapist to get to know you and for you to get to know them. You'll likely discuss your reasons for seeking therapy, your history, and what you hope to achieve.</p>
      
      <h3>Healing is Not Linear</h3>
      <p>It's important to remember that healing is not a straight line. There will be days when you feel like you're making great strides and other days when it feels like you're taking steps back. This is a normal and expected part of the process.</p>
      
      <h3>Conclusion</h3>
      <p>Therapy is a powerful tool for transformation. By committing to the process and being open to the journey, you can discover a deeper understanding of yourself and build a more resilient, fulfilling life.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'March 10, 2026',
        read_time: '8 min read',
        category: 'Mental Health',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773920128596-freepik__a-symbolic-and-emotionally-evocative-scene-shows-a__80934.png',
        is_featured: true,
        is_published: true,
    },
    {
        slug: '5-signs-therapy-benefit',
        title: '5 Signs You Might Benefit from Therapy',
        excerpt: 'Recognizing when to seek professional support is an important step in your wellness journey.',
        content_rich_text: `
      <p>Recognizing when to seek professional support is an important step in your wellness journey. Many people wait until they are in crisis before reaching out, but therapy can be incredibly beneficial at any stage of life.</p>
      
      <h3>1. You're Feeling Overwhelmed</h3>
      <p>If you find that your daily stressors are becoming too much to handle, and you're struggling to keep up with your responsibilities, therapy can provide you with tools to manage your stress more effectively.</p>
      
      <h3>2. Your Relationships are Suffering</h3>
      <p>Whether it's with a partner, family member, or friend, if you're experiencing persistent conflict or a lack of connection, a therapist can help you improve your communication and build healthier relationships.</p>
      
      <h3>3. You're Struggling with Your Emotions</h3>
      <p>If you're feeling persistent sadness, anxiety, or anger that you can't seem to shake, therapy can help you understand the root of these emotions and develop strategies for emotional regulation.</p>
      
      <h3>4. You've Experienced Trauma</h3>
      <p>If you've gone through a traumatic event, whether recently or in the past, and it's still affecting your daily life, specialized trauma therapy can help you process the experience and move toward healing.</p>
      
      <h3>5. You Want to Grow</h3>
      <p>Therapy isn't just for when things are going wrong. Many people seek therapy to gain a deeper understanding of themselves, explore their patterns, and work toward personal goals.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'March 5, 2026',
        read_time: '5 min read',
        category: 'Mental Health',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773920240848-freepik__a-thoughtfully-composed-scene-shows-a-series-of-qu__80935.png',
        is_featured: false,
        is_published: true,
    },
    {
        slug: 'building-resilience-difficult-times',
        title: 'Building Resilience in Difficult Times',
        excerpt: 'Learn practical strategies for developing emotional resilience and coping with life\'s challenges.',
        content_rich_text: `
      <p>Life is full of challenges, and building resilience is about developing the ability to bounce back from adversity. It's not about avoiding stress, but about how we respond to it.</p>
      
      <h3>What is Resilience?</h3>
      <p>Resilience is the process of adapting well in the face of adversity, trauma, tragedy, threats, or significant sources of stress. It's a skill that can be learned and developed over time.</p>
      
      <h3>Practical Strategies for Resilience</h3>
      <ul>
        <li><strong>Practice Self-Care:</strong> Taking care of your physical and emotional needs is fundamental to resilience.</li>
        <li><strong>Build Container Connections:</strong> Having supportive relationships with friends and family provides a safety net during tough times.</li>
        <li><strong>Maintain Perspective:</strong> Try to see challenges as temporary and manageable rather than insurmountable.</li>
        <li><strong>Focus on What You Can Control:</strong> Instead of worrying about what you can't change, focus your energy on the things you can.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building resilience takes time and practice, but it's an investment that will serve you throughout your life.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'February 28, 2026',
        read_time: '7 min read',
        category: 'Wellness',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773920354238-freepik__a-powerful-symbolic-scene-shows-a-vast-natural-lan__80936.png',
        is_featured: false,
        is_published: true,
    },
    {
        slug: 'power-of-mindfulness-daily-life',
        title: 'The Power of Mindfulness in Daily Life',
        excerpt: 'Discover how simple mindfulness practices can transform your mental wellbeing and reduce stress.',
        content_rich_text: `
      <p>Mindfulness is the practice of being present in the moment, without judgment. It's a simple yet powerful tool that can have a profound impact on your mental health and overall well-being.</p>
      
      <h3>Benefits of Mindfulness</h3>
      <p>Research has shown that mindfulness can reduce stress, improve focus, enhance emotional regulation, and even boost the immune system.</p>
      
      <h3>Simple Ways to Practice Mindfulness</h3>
      <ul>
        <li><strong>Mindful Breathing:</strong> Take a few minutes each day to focus on your breath, noticing the sensation of air entering and leaving your body.</li>
        <li><strong>Mindful Eating:</strong> Pay attention to the taste, texture, and smell of your food, eating slowly and without distraction.</li>
        <li><strong>Mindful Walking:</strong> Notice the sensation of your feet hitting the ground and the world around you as you walk.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Incorporating mindfulness into your daily life doesn't have to be complicated. By making small changes, you can begin to experience the benefits of being more present and aware.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'February 20, 2026',
        read_time: '6 min read',
        category: 'Self-Care',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773916197151-freepik__a-serene-scene-showing-a-black-woman-with-afro-hai__80926.png',
        is_featured: false,
        is_published: true,
    },
    {
        slug: 'strengthening-family-bonds-communication',
        title: 'Strengthening Family Bonds Through Communication',
        excerpt: 'Effective communication is the foundation of healthy family relationships. Here are practical tips.',
        content_rich_text: `
      <p>Family is our primary support system, and strong communication is essential for maintaining healthy relationships. When we communicate effectively, we build trust, resolve conflicts more easily, and feel more connected to one another.</p>
      
      <h3>The Importance of Active Listening</h3>
      <p>Active listening involves fully focusing on what the other person is saying, without thinking about your response. It means listening with empahty and seeking to understand their perspective.</p>
      
      <h3>Tips for Better Family Communication</h3>
      <ul>
        <li><strong>Schedule Regular Check-ins:</strong> Make time to talk as a family, whether it's over dinner or during a dedicated family meeting.</li>
        <li><strong>Use "I" Statements:</strong> Express your feelings and needs without blaming others.</li>
        <li><strong>Be Honest and Open:</strong> Create a safe space where everyone feels comfortable sharing their thoughts and feelings.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Strengthening family bonds takes effort, but the rewards of a more connected and supportive family are well worth it.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'February 15, 2026',
        read_time: '8 min read',
        category: 'Relationships',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773920671583-freepik__a-warm-inviting-family-scene-shows-a-black-family-__77255.png',
        is_featured: false,
        is_published: true,
    },
    {
        slug: 'understanding-trauma-recovery-path',
        title: 'Understanding Trauma and the Path to Recovery',
        excerpt: 'Trauma affects us in profound ways, but healing is possible. Learn about the recovery process.',
        content_rich_text: `
      <p>Trauma is a deeply distressing or disturbing experience that can have long-lasting effects on a person's mental, emotional, and physical well-being. It can stem from a single event or a series of events.</p>
      
      <h3>How Trauma Affects Us</h3>
      <p>Trauma can manifest in many different ways, including anxiety, depression, flashbacks, difficulty sleeping, and challenges in relationships. It can also lead to physical symptoms like chronic pain or a weakened immune system.</p>
      
      <h3>The Path to Recovery</h3>
      <p>Healing from trauma is possible, but it often requires professional support. Therapy can provide a safe space to process traumatic experiences and develop coping strategies.</p>
      
      <h3>Conclusion</h3>
      <p>If you've experienced trauma, know that you're not alone and that help is available. With the right support, you can find a path to healing and recovery.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'February 8, 2026',
        read_time: '10 min read',
        category: 'Trauma',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773920796841-freepik__a-symbolic-and-reflective-scene-shows-a-black-indi__77256.png',
        is_featured: false,
        is_published: true,
    },
    {
        slug: 'self-care-practices-busy-professionals',
        title: 'Self-Care Practices for Busy Professionals',
        excerpt: 'Finding time for self-care can be challenging. Here are practical strategies for busy lives.',
        content_rich_text: `
      <p>For many busy professionals, self-care is often the first thing to be sacrificed when work becomes demanding. However, taking care of yourself is essential for maintaining your productivity, creativity, and overall well-being.</p>
      
      <h3>The Importance of Self-Care</h3>
      <p>Self-care isn't a luxury; it's a necessity. When we neglect our own needs, we become more susceptible to burnout, stress, and physical illness.</p>
      
      <h3>Practical Self-Care for Busy People</h3>
      <ul>
        <li><strong>Set Boundaries:</strong> Learn to say no to requests that will overextend you.</li>
        <li><strong>Take Short Breaks:</strong> Even a few minutes of away-from-your-desk time can make a difference.</li>
        <li><strong>Prioritize Sleep:</strong> Getting enough rest is fundamental to your health and focus.</li>
        <li><strong>Engage in Hobbies:</strong> Make time for activities that you enjoy and that nourish your soul.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Self-care doesn't have to be time-consuming. By making small, consistent changes, you can improve your well-being and thrive in your professional life.</p>
    `,
        author_name: 'Liz Odwallo',
        published_date: 'February 1, 2026',
        read_time: '6 min read',
        category: 'Self-Care',
        featured_image_url: 'https://solby.sfo3.digitaloceanspaces.com/1773916444305-freepik__a-black-woman-sitting-by-a-window-with-sunlight-ge__58932.png',
        is_featured: false,
        is_published: true,
    },
];
async function seedBlogs(connection) {
    const BlogModel = connection.model('BlogPost', blog_post_schema_1.BlogPostSchema);
    await BlogModel.deleteMany({});
    console.log('🗑️  Cleaned blogs collection');
    const created = await BlogModel.insertMany(exports.blogPosts);
    console.log(`✅ Seeded ${created.length} blog posts`);
}
//# sourceMappingURL=blog.seed.js.map