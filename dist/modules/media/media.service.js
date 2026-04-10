"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const media_schema_1 = require("./schemas/media.schema");
let MediaService = class MediaService {
    mediaModel;
    constructor(mediaModel) {
        this.mediaModel = mediaModel;
    }
    async create(createMediaDto) {
        const createdMedia = new this.mediaModel(createMediaDto);
        return createdMedia.save();
    }
    async findAll() {
        return this.mediaModel.find().sort({ created_at: -1 }).exec();
    }
    async findOne(id) {
        const media = await this.mediaModel.findById(id).exec();
        if (!media) {
            throw new common_1.NotFoundException(`Media with ID ${id} not found`);
        }
        return media;
    }
    async update(id, updateMediaDto) {
        const updatedMedia = await this.mediaModel
            .findByIdAndUpdate(id, updateMediaDto, { new: true })
            .exec();
        if (!updatedMedia) {
            throw new common_1.NotFoundException(`Media with ID ${id} not found`);
        }
        return updatedMedia;
    }
    async remove(id) {
        const deletedMedia = await this.mediaModel.findByIdAndDelete(id).exec();
        if (!deletedMedia) {
            throw new common_1.NotFoundException(`Media with ID ${id} not found`);
        }
        return deletedMedia;
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(media_schema_1.Media.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MediaService);
//# sourceMappingURL=media.service.js.map