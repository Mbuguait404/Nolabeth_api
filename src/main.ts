import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ─── Security Headers ───────────────────────────────────────────────────────
  app.use((helmet as any).default());

  // ─── CORS ───────────────────────────────────────────────────────────────────
  const defaultOrigins = ['http://localhost:3001', 'http://localhost:5173'];
  const envOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];
  const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // ─── Global Validation Pipe ─────────────────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // Strip unknown properties
      forbidNonWhitelisted: true,
      transform: true,          // Auto-transform payloads to DTO types
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // ─── Global Exception Filter & Response Transform ────────────────────────────
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  // ─── Swagger Documentation ──────────────────────────────────────────────────
  const config = new DocumentBuilder()
    .setTitle('NOLABETH API')
    .setDescription('API endpoints for NOLABETH Admin and Application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 NOLABETH Admin API running on: http://localhost:${port}`);
  console.log(`📚 Swagger Documentation accessible at: http://localhost:${port}/api/docs`);
}
bootstrap();

