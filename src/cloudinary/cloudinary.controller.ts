import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard'; // Assuming Jwt Auth exists

@Controller('api/v1/upload')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    // Validate size (e.g. 5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      throw new BadRequestException('File size exceeds 5MB');
    }

    // Validate mimetype 
    if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
        throw new BadRequestException('Unsupported file format');
    }

    try {
      const result = await this.cloudinaryService.uploadImage(file);
      return {
        message: 'File uploaded successfully',
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height,
      };
    } catch (error) {
      throw new BadRequestException('Image upload failed: ' + error.message);
    }
  }
}
