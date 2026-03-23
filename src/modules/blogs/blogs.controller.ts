import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { CreateBlogPostDto, UpdateBlogPostDto } from './dto/blog-post.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('Blogs')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/admin/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  @ApiOperation({ summary: 'List all blog posts' })
  findAll(@Query() pagination: PaginationDto & { category?: string }) {
    return this.blogsService.findAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific blog post by ID' })
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get a specific blog post by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.blogsService.findBySlug(slug);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new blog post' })
  create(@Body() dto: CreateBlogPostDto) {
    return this.blogsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog post' })
  update(@Param('id') id: string, @Body() dto: UpdateBlogPostDto) {
    return this.blogsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog post' })
  remove(@Param('id') id: string) {
    return this.blogsService.remove(id);
  }
}
