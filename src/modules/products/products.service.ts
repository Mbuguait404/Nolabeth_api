import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument, StockStatus } from './schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async findAll(pagination: PaginationDto & { category?: string }) {
    const { page = 1, limit = 20, search, category } = pagination;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }
    if (category) {
      query.category = category;
    }

    const [data, total] = await Promise.all([
      this.productModel.find(query).sort({ created_at: -1 }).skip(skip).limit(limit).exec(),
      this.productModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async create(dto: CreateProductDto) {
    const product = new this.productModel(dto);
    return product.save();
  }

  async update(id: string, dto: UpdateProductDto) {
    const product = await this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async remove(id: string) {
    const result = await this.productModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Product #${id} not found`);
    return { message: 'Product deleted successfully' };
  }

  async getStats() {
    const total = await this.productModel.countDocuments().exec();
    const active = await this.productModel.countDocuments({ is_active: true }).exec();
    const outOfStock = await this.productModel.countDocuments({ stock_status: StockStatus.OUT_OF_STOCK }).exec();
    return { total, active, outOfStock };
  }
}
