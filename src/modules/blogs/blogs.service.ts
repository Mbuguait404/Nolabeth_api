import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogPost)
    private blogsRepo: Repository<BlogPost>,
  ) {}

  async findAll(pagination: PaginationDto & { category?: string }) {
    const { page = 1, limit = 20, search, category } = pagination;

    const qb = this.blogsRepo.createQueryBuilder('post');

    if (search) {
      qb.where('post.title ILIKE :search OR post.excerpt ILIKE :search', {
        search: `%${search}%`,
      });
    }

    if (category) {
      qb.andWhere('post.category = :category', { category });
    }

    qb.orderBy('post.created_at', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const post = await this.blogsRepo.findOne({ where: { id } });
    if (!post) throw new NotFoundException(`Blog post #${id} not found`);
    return post;
  }

  async findBySlug(slug: string) {
    const post = await this.blogsRepo.findOne({ where: { slug } });
    if (!post) throw new NotFoundException(`Blog post with slug "${slug}" not found`);
    return post;
  }

  async create(dto: CreateBlogPostDto) {
    if (dto.slug) {
      const exists = await this.blogsRepo.findOne({ where: { slug: dto.slug } });
      if (exists) throw new ConflictException(`Slug "${dto.slug}" already in use`);
    }
    const post = this.blogsRepo.create(dto);
    return this.blogsRepo.save(post);
  }

  async update(id: string, dto: UpdateBlogPostDto) {
    await this.findOne(id);
    await this.blogsRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.blogsRepo.delete(id);
    return { message: 'Blog post deleted successfully' };
  }

  async getStats() {
    const total = await this.blogsRepo.count();
    const published = await this.blogsRepo.count({ where: { is_published: true } });
    const featured = await this.blogsRepo.count({ where: { is_featured: true } });
    return { total, published, drafts: total - published, featured };
  }
}
