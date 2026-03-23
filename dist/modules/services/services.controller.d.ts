import { ServicesService } from './services.service';
import { CreateTherapyServiceDto, UpdateTherapyServiceDto } from './dto/therapy-service.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(pagination: PaginationDto): Promise<{
        data: import("./entities/therapy-service.entity").TherapyService[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/therapy-service.entity").TherapyService>;
    create(dto: CreateTherapyServiceDto): Promise<import("./entities/therapy-service.entity").TherapyService>;
    reorder(body: {
        orderedIds: string[];
    }): Promise<{
        message: string;
    }>;
    update(id: string, dto: UpdateTherapyServiceDto): Promise<import("./entities/therapy-service.entity").TherapyService>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
