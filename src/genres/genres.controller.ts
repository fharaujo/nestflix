import {
  Controller,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Body,
  Post,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
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

  // route by id genre
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getByIdGenre(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.getByIdGenre(id);
  }

  // route create genre
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createGenre(@Body() data: createGenresDto): Promise<Genre> {
    return this.genresService.createGenre(data);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async updateGenre(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: createGenresDto,
  ): Promise<Genre> {
    return this.genresService.updateGenre(id, data);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteGenre(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return this.genresService.deleteGenre(id);
  }
}
