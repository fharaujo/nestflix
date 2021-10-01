import { GenresService } from './genres.service';
import { createGenresDto } from './dto/create.genres.dto';
import { Genre } from '.prisma/client';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    getAll(): Promise<Genre[]>;
    getByIdGenre(id: number): Promise<Genre>;
    createGenre(data: createGenresDto): Promise<Genre>;
    updateGenre(id: number, data: createGenresDto): Promise<Genre>;
    deleteGenre(id: number): Promise<Genre>;
}
