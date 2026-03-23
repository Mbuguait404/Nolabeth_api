import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { TherapyService } from './entities/therapy-service.entity';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(TherapyService)
    private servicesRepo: Repository<TherapyService>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 50, search } = pagination;

    const where = search ? { title: ILike(`%${search}%`) } : {};

    const [data, total] = await this.servicesRepo.findAndCount({
      where,
      order: { priority_order: 'ASC', created_at: 'ASC' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const service = await this.servicesRepo.findOne({ where: { id } });
    if (!service) throw new NotFoundException(`Service #${id} not found`);
    return service;
  }

  async create(dto: CreateTherapyServiceDto) {
    const service = this.servicesRepo.create(dto);
    return this.servicesRepo.save(service);
  }

  async update(id: string, dto: UpdateTherapyServiceDto) {
    await this.findOne(id);
    await this.servicesRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.servicesRepo.delete(id);
    return { message: 'Service deleted successfully' };
  }

  async reorder(orderedIds: string[]) {
    const updates = orderedIds.map((id, index) =>
      this.servicesRepo.update(id, { priority_order: index }),
    );
    await Promise.all(updates);
    return { message: 'Services reordered successfully' };
  }
}
