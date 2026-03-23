import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument, ClientStatus } from './schemas/client.schema';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<ClientDocument>,
  ) {}

  async findAll(pagination: PaginationDto & { status?: ClientStatus }) {
    const { page = 1, limit = 20, search, status } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.$or = [
        { full_name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone_number: { $regex: search, $options: 'i' } },
      ];
    }
    if (status) {
      query.status = status;
    }

    const [data, total] = await Promise.all([
      this.clientModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.clientModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const client = await this.clientModel.findById(id).exec();
    if (!client) throw new NotFoundException(`Client #${id} not found`);
    return client;
  }

  async create(dto: CreateClientDto) {
    const client = new this.clientModel(dto);
    return client.save();
  }

  async update(id: string, dto: UpdateClientDto) {
    const client = await this.clientModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!client) throw new NotFoundException(`Client #${id} not found`);
    return client;
  }

  async remove(id: string) {
    const result = await this.clientModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Client record deleted successfully`);
    return { message: 'Client record deleted successfully' };
  }

  async getStats() {
    const total = await this.clientModel.countDocuments().exec();
    const newLeads = await this.clientModel.countDocuments({ status: ClientStatus.NEW }).exec();
    const inProgress = await this.clientModel.countDocuments({ status: ClientStatus.IN_PROGRESS }).exec();
    const completed = await this.clientModel.countDocuments({ status: ClientStatus.COMPLETED }).exec();
    return { total, newLeads, inProgress, completed };
  }
}
