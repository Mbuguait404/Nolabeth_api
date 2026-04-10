import { Model } from 'mongoose';
import { Media, MediaDocument } from './schemas/media.schema';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaService {
    private mediaModel;
    constructor(mediaModel: Model<MediaDocument>);
    create(createMediaDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: string): Promise<Media>;
    update(id: string, updateMediaDto: UpdateMediaDto): Promise<Media>;
    remove(id: string): Promise<Media>;
}
