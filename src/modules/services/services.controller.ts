import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('Services')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/admin/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOperation({ summary: 'List all services' })
  findAll(@Query() pagination: PaginationDto) {
    return this.servicesService.findAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a generic service by ID' })
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new service' })
  create(@Body() dto: CreateTherapyServiceDto) {
    return this.servicesService.create(dto);
  }

  @Post('reorder')
  @ApiOperation({ summary: 'Reorder services list' })
  reorder(@Body() body: { orderedIds: string[] }) {
    return this.servicesService.reorder(body.orderedIds);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a service' })
  update(@Param('id') id: string, @Body() dto: UpdateTherapyServiceDto) {
    return this.servicesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a service' })
  remove(@Param('id') id: string) {
    return this.servicesService.remove(id);
  }
}
