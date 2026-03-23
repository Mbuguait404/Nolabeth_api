import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepo: Repository<Product>,
  ) {}

  async findAll(pagination: PaginationDto & { category?: string }) {
    const { page = 1, limit = 20, search, category } = pagination;

    const qb = this.productsRepo.createQueryBuilder('product');

    if (search) {
      qb.where('product.name ILIKE :search OR product.description ILIKE :search', {
        search: `%${search}%`,
      });
    }

    if (category) {
      qb.andWhere('product.category = :category', { category });
    }

    qb.orderBy('product.created_at', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    return this.productsRepo.save(product);
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    await this.productsRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.productsRepo.delete(id);
    return { message: 'Product deleted successfully' };
  }

  async getStats() {
    const total = await this.productsRepo.count();
    const active = await this.productsRepo.count({ where: { is_active: true } });
    const outOfStock = await this.productsRepo.count({
      where: { stock_status: 'Out of Stock' as any },
    });
    return { total, active, outOfStock };
  }
}
