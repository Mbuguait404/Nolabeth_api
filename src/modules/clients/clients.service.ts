import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Client, ClientStatus } from './entities/client.entity';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepo: Repository<Client>,
  ) {}

  async findAll(pagination: PaginationDto & { status?: ClientStatus }) {
    const { page = 1, limit = 20, search, status } = pagination;

    const qb = this.clientsRepo.createQueryBuilder('client');

    if (search) {
      qb.where(
        'client.full_name ILIKE :search OR client.email ILIKE :search',
        { search: `%${search}%` },
      );
    }

    if (status) {
      qb.andWhere('client.status = :status', { status });
    }

    qb.orderBy('client.created_at', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const client = await this.clientsRepo.findOne({ where: { id } });
    if (!client) throw new NotFoundException(`Client #${id} not found`);
    return client;
  }

  async create(dto: CreateClientDto) {
    const client = this.clientsRepo.create(dto);
    return this.clientsRepo.save(client);
  }

  async update(id: string, dto: UpdateClientDto) {
    await this.findOne(id);
    await this.clientsRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.clientsRepo.delete(id);
    return { message: 'Client record deleted successfully' };
  }

  async getStats() {
    const total = await this.clientsRepo.count();
    const newLeads = await this.clientsRepo.count({ where: { status: ClientStatus.NEW } });
    const inProgress = await this.clientsRepo.count({ where: { status: ClientStatus.IN_PROGRESS } });
    const completed = await this.clientsRepo.count({ where: { status: ClientStatus.COMPLETED } });
    return { total, newLeads, inProgress, completed };
  }
}
