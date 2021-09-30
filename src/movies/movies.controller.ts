import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
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

  // route create movie
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createMovie(@Body() data: createMoviesDto): Promise<Movie> {
    return this.moviesService.createMovie(data);
  }

  // route update movie
  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() movie: createMoviesDto,
  ): Promise<Movie> {
    return this.moviesService.updateMovie(id, movie);
  }

  // route delete one movie
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async deleteOneMovie(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.moviesService.deleteMovie(id);
  }
}
