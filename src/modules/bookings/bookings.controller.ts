import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('Bookings')
@Controller('api/v1')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // Public endpoint to create a booking
  @Post('bookings')
  @ApiOperation({ summary: 'Create a new booking request' })
  create(@Body() dto: CreateBookingDto) {
    return this.bookingsService.create(dto);
  }

  // Admin endpoints
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('admin/bookings')
  @ApiOperation({ summary: 'List all bookings (admin only)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.bookingsService.findAll(pagination);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('admin/bookings/:id')
  @ApiOperation({ summary: 'Get a booking by ID (admin only)' })
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('admin/bookings/:id')
  @ApiOperation({ summary: 'Update a booking (admin only)' })
  update(@Param('id') id: string, @Body() dto: UpdateBookingDto) {
    return this.bookingsService.update(id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('admin/bookings/:id')
  @ApiOperation({ summary: 'Delete a booking (admin only)' })
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(id);
  }
}
