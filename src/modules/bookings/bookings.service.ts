import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name)
    private bookingModel: Model<BookingDocument>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 50, search } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.bookingModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.bookingModel.countDocuments(query).exec(),
    ]);

    return { 
      data, 
      total, 
      page: Number(page), 
      limit: Number(limit), 
      pages: Math.ceil(total / limit) 
    };
  }

  async findOne(id: string) {
    const booking = await this.bookingModel.findById(id).exec();
    if (!booking) throw new NotFoundException(`Booking #${id} not found`);
    return booking;
  }

  async create(dto: CreateBookingDto) {
    const booking = new this.bookingModel(dto);
    return booking.save();
  }

  async update(id: string, dto: UpdateBookingDto) {
    const booking = await this.bookingModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!booking) throw new NotFoundException(`Booking #${id} not found`);
    return booking;
  }

  async remove(id: string) {
    const result = await this.bookingModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Booking #${id} not found`);
    return { message: 'Booking deleted successfully' };
  }
}
