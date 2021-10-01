import { MoviesService } from './movies.service';
import { createMoviesDto } from './dto/create.movies.dto';
import { Movie } from '.prisma/client';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Promise<Movie[]>;
    getByIdMovie(id: number): Promise<Movie>;
    createMovie(data: createMoviesDto): Promise<Movie>;
    updateMovie(id: number, movie: createMoviesDto): Promise<Movie>;
    deleteOneMovie(id: number): Promise<Movie>;
}
