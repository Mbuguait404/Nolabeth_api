import { ClientsService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ClientStatus } from './entities/client.entity';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(pagination: PaginationDto & {
        status?: ClientStatus;
    }): Promise<{
        data: import("./entities/client.entity").Client[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<import("./entities/client.entity").Client>;
    create(dto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    update(id: string, dto: UpdateClientDto): Promise<import("./entities/client.entity").Client>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
