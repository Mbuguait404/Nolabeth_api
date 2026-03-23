import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resource, ResourceDocument, ResourceType } from './schemas/resource.schema';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name)
    private resourceModel: Model<ResourceDocument>,
  ) {}

  async findAll(pagination: PaginationDto & { type?: ResourceType; category?: string }) {
    const { page = 1, limit = 20, search, type, category } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    if (type) query.type = type;
    if (category) query.category = category;

    const [data, total] = await Promise.all([
      this.resourceModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.resourceModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const resource = await this.resourceModel.findById(id).exec();
    if (!resource) throw new NotFoundException(`Resource #${id} not found`);
    return resource;
  }

  async create(dto: CreateResourceDto) {
    const resource = new this.resourceModel(dto);
    return resource.save();
  }

  async update(id: string, dto: UpdateResourceDto) {
    const resource = await this.resourceModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!resource) throw new NotFoundException(`Resource #${id} not found`);
    return resource;
  }

  async remove(id: string) {
    const result = await this.resourceModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Resource #${id} not found`);
    return { message: 'Resource deleted successfully' };
  }
}
