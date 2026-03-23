import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TherapyService, TherapyServiceSchema } from './schemas/therapy-service.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TherapyService.name, schema: TherapyServiceSchema }])],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [ServicesService],
})
export class ServicesModule {}
