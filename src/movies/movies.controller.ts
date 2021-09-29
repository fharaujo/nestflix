import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMoviesDto } from './dto/create.movies.dto';
import { Movie } from '.prisma/client';

@Controller('v1/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // route get all movies
  @Get('/list')
  @UsePipes(ValidationPipe)
  async getAll(): Promise<Movie[]> {
    return this.moviesService.findMany();
  }

  // route by id movies
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getByIdMovie(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getByIdMovies(id);
  }
}
