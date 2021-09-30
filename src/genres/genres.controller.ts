import { Controller, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { GenresService } from './genres.service';
import { createGenresDto } from './dto/create.genres.dto';
import { Genre } from '.prisma/client';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // route get all genres
  @Get('/list')
  @UsePipes(ValidationPipe)
  async getAll(): Promise<Genre[]> {
    return this.genresService.findMany();
  }
}
