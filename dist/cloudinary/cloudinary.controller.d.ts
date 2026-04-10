import { CloudinaryService } from './cloudinary.service';
export declare class CloudinaryController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<{
        message: string;
        url: any;
        public_id: any;
        format: any;
        width: any;
        height: any;
    }>;
}
