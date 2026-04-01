import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  UseGuards 
} from '@nestjs/common';
import { EventRegistrationsService } from './event-registrations.service';
import { CreateEventRegistrationDto, UpdateRegistrationStatusDto } from './dto/create-event-registration.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('api/v1/event-registrations')
export class EventRegistrationsController {
  constructor(private readonly eventRegistrationsService: EventRegistrationsService) {}

  @Post()
  async create(@Body() createRegistrationDto: CreateEventRegistrationDto) {
    return this.eventRegistrationsService.create(createRegistrationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.eventRegistrationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('event/:eventId')
  async findByEvent(@Param('eventId') eventId: string) {
    return this.eventRegistrationsService.findByEvent(eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventRegistrationsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string, 
    @Body() updateStatusDto: UpdateRegistrationStatusDto
  ) {
    return this.eventRegistrationsService.updateStatus(id, updateStatusDto);
  }
}
