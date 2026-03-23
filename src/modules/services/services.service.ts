import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TherapyService, TherapyServiceDocument } from './schemas/therapy-service.schema';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(TherapyService.name)
    private serviceModel: Model<TherapyServiceDocument>,
  ) {}

  async findAll(pagination: PaginationDto) {
    const { page = 1, limit = 50, search } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const [data, total] = await Promise.all([
      this.serviceModel.find(query).sort({ priority_order: 1, created_at: 1 }).skip(skip).limit(limit).exec(),
      this.serviceModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const service = await this.serviceModel.findById(id).exec();
    if (!service) throw new NotFoundException(`Service #${id} not found`);
    return service;
  }

  async create(dto: CreateTherapyServiceDto) {
    const service = new this.serviceModel(dto);
    return service.save();
  }

  async update(id: string, dto: UpdateTherapyServiceDto) {
    const service = await this.serviceModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!service) throw new NotFoundException(`Service #${id} not found`);
    return service;
  }

  async remove(id: string) {
    const result = await this.serviceModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Service #${id} not found`);
    return { message: 'Service deleted successfully' };
  }

  async reorder(orderedIds: string[]) {
    const updates = orderedIds.map((id, index) =>
      this.serviceModel.findByIdAndUpdate(id, { priority_order: index }).exec(),
    );
    await Promise.all(updates);
    return { message: 'Services reordered successfully' };
  }
}
