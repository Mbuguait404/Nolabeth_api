import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AdminRole } from 'src/auth/entities/admin-user.entity';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@ApiTags('Messaging')
@ApiBearerAuth()
@Controller('api/v1/messaging')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) { }

  @Post('send')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Send a notification' })
  async send(@Body() data: any) {
    return this.messagingService.sendNotification(data);
  }

  @Get('logs')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get message logs' })
  async getLogs(@Query() query: any) {
    return this.messagingService.getLogs(query);
  }

  @Get('templates')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get all templates' })
  async getTemplates() {
    return this.messagingService.getTemplates();
  }

  @Post('templates')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a template' })
  @ApiBody({ type: CreateTemplateDto })
  async createTemplate(@Body() data: CreateTemplateDto) {
    return this.messagingService.createTemplate(data);
  }

  @Put('templates/:id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update a template' })
  @ApiBody({ type: UpdateTemplateDto })
  async updateTemplate(@Param('id') id: string, @Body() data: UpdateTemplateDto) {
    return this.messagingService.updateTemplate(id, data);
  }

  @Delete('templates/:id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a template' })
  async deleteTemplate(@Param('id') id: string) {
    return this.messagingService.deleteTemplate(id);
  }

  @Get('stats')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get usage stats' })
  async getStats() {
    return this.messagingService.getStats();
  }

  @Get('settings')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Get messaging settings' })
  async getSettings() {
    return this.messagingService.getMessagingSettings();
  }

  @Put('settings')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Update messaging settings' })
  async updateSettings(@Body() data: any) {
    return this.messagingService.updateMessagingSettings(data);
  }
}
