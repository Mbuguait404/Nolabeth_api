import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createMediaDto: CreateMediaDto): Promise<import("./schemas/media.schema").Media>;
    findAll(): Promise<import("./schemas/media.schema").Media[]>;
    findOne(id: string): Promise<import("./schemas/media.schema").Media>;
    update(id: string, updateMediaDto: UpdateMediaDto): Promise<import("./schemas/media.schema").Media>;
    remove(id: string): Promise<import("./schemas/media.schema").Media>;
}
