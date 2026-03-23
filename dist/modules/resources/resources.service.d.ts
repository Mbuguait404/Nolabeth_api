import { Repository } from 'typeorm';
import { Resource, ResourceType } from './entities/resource.entity';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ResourcesService {
    private resourcesRepo;
    constructor(resourcesRepo: Repository<Resource>);
    findAll(pagination: PaginationDto & {
        type?: ResourceType;
        category?: string;
    }): Promise<{
        data: Resource[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<Resource>;
    create(dto: CreateResourceDto): Promise<Resource>;
    update(id: string, dto: UpdateResourceDto): Promise<Resource>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
