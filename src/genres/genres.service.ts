import { Genre } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  // functions all genres
  async findMany(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }
}
