import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { BlogPost, BlogPostSchema } from './schemas/blog-post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BlogPost.name, schema: BlogPostSchema }])],
  providers: [BlogsService],
  controllers: [BlogsController],
  exports: [BlogsService],
})
export class BlogsModule {}
