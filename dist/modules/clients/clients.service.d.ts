import { Repository } from 'typeorm';
import { Client, ClientStatus } from './entities/client.entity';
import { CreateClientDto, UpdateClientDto } from './dto/client.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class ClientsService {
    private clientsRepo;
    constructor(clientsRepo: Repository<Client>);
    findAll(pagination: PaginationDto & {
        status?: ClientStatus;
    }): Promise<{
        data: Client[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    findOne(id: string): Promise<Client>;
    create(dto: CreateClientDto): Promise<Client>;
    update(id: string, dto: UpdateClientDto): Promise<Client>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        total: number;
        newLeads: number;
        inProgress: number;
        completed: number;
    }>;
}
