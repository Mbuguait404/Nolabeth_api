import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media, MediaDocument } from './schemas/media.schema';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<MediaDocument>) {}

  async create(createMediaDto: CreateMediaDto): Promise<Media> {
    const createdMedia = new this.mediaModel(createMediaDto);
    return createdMedia.save();
  }

  async findAll(): Promise<Media[]> {
    return this.mediaModel.find().sort({ created_at: -1 }).exec();
  }

  async findOne(id: string): Promise<Media> {
    const media = await this.mediaModel.findById(id).exec();
    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }
    return media;
  }

  async update(id: string, updateMediaDto: UpdateMediaDto): Promise<Media> {
    const updatedMedia = await this.mediaModel
      .findByIdAndUpdate(id, updateMediaDto, { new: true })
      .exec();
    if (!updatedMedia) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }
    return updatedMedia;
  }

  async remove(id: string): Promise<Media> {
    const deletedMedia = await this.mediaModel.findByIdAndDelete(id).exec();
    if (!deletedMedia) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }
    return deletedMedia;
  }
}
