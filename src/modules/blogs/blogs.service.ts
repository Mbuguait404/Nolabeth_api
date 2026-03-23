import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogPost, BlogPostDocument } from './schemas/blog-post.schema';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(BlogPost.name)
    private blogModel: Model<BlogPostDocument>,
  ) {}

  async findAll(pagination: PaginationDto & { category?: string }) {
    const { page = 1, limit = 20, search, category } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
      ];
    }
    if (category) {
      query.category = category;
    }

    const [data, total] = await Promise.all([
      this.blogModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.blogModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const post = await this.blogModel.findById(id).exec();
    if (!post) throw new NotFoundException(`Blog post #${id} not found`);
    return post;
  }

  async findBySlug(slug: string) {
    const post = await this.blogModel.findOne({ slug }).exec();
    if (!post) throw new NotFoundException(`Blog post with slug "${slug}" not found`);
    return post;
  }

  async create(dto: CreateBlogPostDto) {
    if (dto.slug) {
      const exists = await this.blogModel.findOne({ slug: dto.slug }).exec();
      if (exists) throw new ConflictException(`Slug "${dto.slug}" already in use`);
    }
    const post = new this.blogModel(dto);
    return post.save();
  }

  async update(id: string, dto: UpdateBlogPostDto) {
    const post = await this.blogModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!post) throw new NotFoundException(`Blog post #${id} not found`);
    return post;
  }

  async remove(id: string) {
    const result = await this.blogModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Blog post #${id} not found`);
    return { message: 'Blog post deleted successfully' };
  }

  async getStats() {
    const total = await this.blogModel.countDocuments().exec();
    const published = await this.blogModel.countDocuments({ is_published: true }).exec();
    const featured = await this.blogModel.countDocuments({ is_featured: true }).exec();
    return { total, published, drafts: total - published, featured };
  }
}
