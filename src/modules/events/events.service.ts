import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto, UpdateEventDto } from './dto/event.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepo: Repository<Event>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 20, search } = pagination;
    const where = search ? { title: ILike(`%${search}%`) } : {};

    const [data, total] = await this.eventsRepo.findAndCount({
      where,
      order: { created_at: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const event = await this.eventsRepo.findOne({ where: { id } });
    if (!event) throw new NotFoundException(`Event #${id} not found`);
    return event;
  }

  async create(dto: CreateEventDto) {
    const event = this.eventsRepo.create(dto);
    return this.eventsRepo.save(event);
  }

  async update(id: string, dto: UpdateEventDto) {
    await this.findOne(id);
    await this.eventsRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.eventsRepo.delete(id);
    return { message: 'Event deleted successfully' };
  }

  async getStats() {
    const total = await this.eventsRepo.count();
    const upcoming = await this.eventsRepo.count({ where: { status: 'Upcoming' as any } });
    const past = await this.eventsRepo.count({ where: { status: 'Past' as any } });
    return { total, upcoming, past };
  }
}
