import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { EventsModule } from '../modules/events/events.module';
import { ClientsModule } from '../modules/clients/clients.module';
import { BlogsModule } from '../modules/blogs/blogs.module';
import { ProductsModule } from '../modules/products/products.module';

@Module({
  imports: [EventsModule, ClientsModule, BlogsModule, ProductsModule],
  controllers: [AdminController],
})
export class AdminModule {}
