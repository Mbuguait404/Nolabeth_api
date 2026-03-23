import { EventsService } from '../modules/events/events.service';
import { ClientsService } from '../modules/clients/clients.service';
import { BlogsService } from '../modules/blogs/blogs.service';
import { ProductsService } from '../modules/products/products.service';
export declare class AdminController {
    private readonly eventsService;
    private readonly clientsService;
    private readonly blogsService;
    private readonly productsService;
    constructor(eventsService: EventsService, clientsService: ClientsService, blogsService: BlogsService, productsService: ProductsService);
    getOverview(): Promise<{
        eventsCount: {
            total: number;
            upcoming: number;
            past: number;
        };
        clientsCount: {
            total: number;
            newLeads: number;
            inProgress: number;
            completed: number;
        };
        blogsCount: {
            total: number;
            published: number;
            drafts: number;
            featured: number;
        };
        productsCount: {
            total: number;
            active: number;
            outOfStock: number;
        };
        generated_at: string;
    }>;
}
