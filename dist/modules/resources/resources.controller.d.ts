import { ResourcesService } from './resources.service';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ResourceType } from './entities/resource.entity';
export declare class ResourcesController {
    private readonly resourcesService;
    constructor(resourcesService: ResourcesService);
    findAll(pagination: PaginationDto & {
        type?: ResourceType;
        category?: string;
    }): Promise<{
        data: import("./entities/resource.entity").Resource[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/resource.entity").Resource>;
    create(dto: CreateResourceDto): Promise<import("./entities/resource.entity").Resource>;
    update(id: string, dto: UpdateResourceDto): Promise<import("./entities/resource.entity").Resource>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
