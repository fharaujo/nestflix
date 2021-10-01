import {
  Controller,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { createParticipantsDto } from './dto/create.participants.dto';
import { Participant } from '.prisma/client';

@Controller('/v1/participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  // route get all participants
  @Get('/list')
  @UsePipes(ValidationPipe)
  async getAll(): Promise<Participant[]> {
    return this.participantsService.findMany();
  }

  // route by id participant
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getByIdParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.getByIdParticipant(id);
  }

  // route create participant
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createParticipant(
    @Body() data: createParticipantsDto,
  ): Promise<Participant> {
    return this.participantsService.createParticipant(data);
  }

  // route update participant
  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async updateParticipant(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: createParticipantsDto,
  ): Promise<Participant> {
    return this.participantsService.updateParticipant(id, data);
  }

  // route delete one movie
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteOneParticipant(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participant> {
    return this.participantsService.deleteParticipant(id);
  }
}
