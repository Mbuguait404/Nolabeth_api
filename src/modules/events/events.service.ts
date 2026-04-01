import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MyEvent, EventDocument, EventStatus } from './schemas/event.schema';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(MyEvent.name)
    private eventModel: Model<EventDocument>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 20, search } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const [data, total] = await Promise.all([
      this.eventModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.eventModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(idOrSlug: string) {
    let event;
    if (Types.ObjectId.isValid(idOrSlug)) {
      event = await this.eventModel.findById(idOrSlug).exec();
    } else {
      event = await this.eventModel.findOne({ slug: idOrSlug }).exec();
    }

    if (!event) throw new NotFoundException(`Event "${idOrSlug}" not found`);
    return event;
  }

  async create(dto: CreateEventDto) {
    if (dto.slug) {
      const exists = await this.eventModel.findOne({ slug: dto.slug }).exec();
      if (exists) throw new ConflictException(`Slug "${dto.slug}" already in use`);
    }
    const event = new this.eventModel(dto);
    return event.save();
  }

  async update(id: string, dto: UpdateEventDto) {
    const event = await this.eventModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!event) throw new NotFoundException(`Event #${id} not found`);
    return event;
  }

  async remove(id: string) {
    const result = await this.eventModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Event #${id} not found`);
    return { message: 'Event deleted successfully' };
  }

  async getStats() {
    const total = await this.eventModel.countDocuments().exec();
    const upcoming = await this.eventModel.countDocuments({ status: EventStatus.UPCOMING }).exec();
    const past = await this.eventModel.countDocuments({ status: EventStatus.PAST }).exec();
    return { total, upcoming, past };
  }
}
