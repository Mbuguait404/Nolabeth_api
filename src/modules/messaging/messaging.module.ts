import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { MessagingSettings, MessagingSettingsSchema } from './schemas/messaging-settings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MessagingSettings.name, schema: MessagingSettingsSchema },
    ]),
  ],
  controllers: [MessagingController],
  providers: [MessagingService],
  exports: [MessagingService],
})
export class MessagingModule {}
