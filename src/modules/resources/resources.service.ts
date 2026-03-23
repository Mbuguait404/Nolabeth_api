import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Resource, ResourceType } from './entities/resource.entity';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(Resource)
    private resourcesRepo: Repository<Resource>,
  ) {}

  async findAll(pagination: PaginationDto & { type?: ResourceType; category?: string }) {
    const { page = 1, limit = 20, search, type, category } = pagination;

    const qb = this.resourcesRepo.createQueryBuilder('resource');

    if (search) {
      qb.where('resource.title ILIKE :search', { search: `%${search}%` });
    }
    if (type) qb.andWhere('resource.type = :type', { type });
    if (category) qb.andWhere('resource.category = :category', { category });

    qb.orderBy('resource.created_at', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const resource = await this.resourcesRepo.findOne({ where: { id } });
    if (!resource) throw new NotFoundException(`Resource #${id} not found`);
    return resource;
  }

  async create(dto: CreateResourceDto) {
    const resource = this.resourcesRepo.create(dto);
    return this.resourcesRepo.save(resource);
  }

  async update(id: string, dto: UpdateResourceDto) {
    await this.findOne(id);
    await this.resourcesRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.resourcesRepo.delete(id);
    return { message: 'Resource deleted successfully' };
  }
}
