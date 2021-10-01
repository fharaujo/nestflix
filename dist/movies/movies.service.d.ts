import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    findMany(): Promise<Movie[]>;
    getByIdMovies(movieId: number): Promise<Movie>;
    createMovie(data: Prisma.MovieCreateInput): Promise<Movie>;
    updateMovie(movieId: number, data: Prisma.MovieCreateInput): Promise<Movie>;
    deleteMovie(id: number): Promise<Movie>;
}
