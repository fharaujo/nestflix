import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ParticipantsController } from './participants.controller';
import { ParticipantsService } from './participants.service';

@Module({
  imports: [PrismaService],
  providers: [ParticipantsService, PrismaService],
  controllers: [ParticipantsController],
})
export class ParticipantsModule {}
