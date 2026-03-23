import { Repository } from 'typeorm';
import { TherapyService } from './entities/therapy-service.entity';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ServicesService {
    private servicesRepo;
    constructor(servicesRepo: Repository<TherapyService>);
    findAll(pagination: PaginationDto): Promise<{
        data: TherapyService[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<TherapyService>;
    create(dto: CreateTherapyServiceDto): Promise<TherapyService>;
    update(id: string, dto: UpdateTherapyServiceDto): Promise<TherapyService>;
    remove(id: string): Promise<{
        message: string;
    }>;
    reorder(orderedIds: string[]): Promise<{
        message: string;
    }>;
}
