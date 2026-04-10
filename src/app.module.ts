import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';

import configuration from './config/configuration';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { EventsModule } from './modules/events/events.module';
import { ClientsModule } from './modules/clients/clients.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { ProductsModule } from './modules/products/products.module';
import { ServicesModule } from './modules/services/services.module';
import { SettingsModule } from './modules/settings/settings.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { MessagingModule } from './modules/messaging/messaging.module';
import { EventRegistrationsModule } from './modules/event-registrations/event-registrations.module';
import { MediaModule } from './modules/media/media.module';
import { KeepAliveService } from './common/services/keep-alive.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ScheduleModule.forRoot(),

    ThrottlerModule.forRoot([{ ttl: 60000, limit: 20 }]),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('database.uri'),
      }),
    }),

    AuthModule,
    AdminModule,
    EventsModule,
    ClientsModule,
    BlogsModule,
    ResourcesModule,
    ProductsModule,
    ServicesModule,
    SettingsModule,
    BookingsModule,
    MessagingModule,
    EventRegistrationsModule,
    MediaModule,
    CloudinaryModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, KeepAliveService],
})
export class AppModule {}
