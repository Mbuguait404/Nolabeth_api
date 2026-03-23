import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate,
} from 'typeorm';

@Entity('blog_posts')
export class BlogPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  author_name: string;

  @Column({ nullable: true })
  published_date: string;

  @Column({ nullable: true })
  read_time: string;

  @Column({ nullable: true })
  category: string;

  @Column('text', { nullable: true })
  excerpt: string;

  @Column('text')
  content_rich_text: string; // HTML or Editor.js JSON string

  @Column({ nullable: true })
  featured_image_url: string;

  @Column({ default: false })
  is_featured: boolean;

  @Column({ default: false })
  is_published: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    if (this.title && !this.slug) {
      this.slug = this.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    }
  }
}
