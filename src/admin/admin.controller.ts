import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { EventsService } from '../modules/events/events.service';
import { ClientsService } from '../modules/clients/clients.service';
import { BlogsService } from '../modules/blogs/blogs.service';
import { ProductsService } from '../modules/products/products.service';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/admin')
export class AdminController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly clientsService: ClientsService,
    private readonly blogsService: BlogsService,
    private readonly productsService: ProductsService,
  ) {}

  @Get('overview')
  @ApiOperation({ summary: 'Get admin dashboard overview statistics' })
  async getOverview() {
    const [events, clients, blogs, products] = await Promise.all([
      this.eventsService.getStats(),
      this.clientsService.getStats(),
      this.blogsService.getStats(),
      this.productsService.getStats(),
    ]);

    return {
      eventsCount: events,
      clientsCount: clients,
      blogsCount: blogs,
      productsCount: products,
      generated_at: new Date().toISOString(),
    };
  }
}
