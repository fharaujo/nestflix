import { Genre, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GenresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMany(): Promise<Genre[]>;
    getByIdGenre(genreId: number): Promise<Genre>;
    createGenre(data: Prisma.GenreCreateInput): Promise<Genre>;
    updateGenre(genreId: number, data: Prisma.GenreCreateInput): Promise<Genre>;
    deleteGenre(id: number): Promise<Genre>;
}
