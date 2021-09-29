import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Movie[]> {
    return this.prisma.movie.findMany();
  }

  async getByIdMovies(movieId: number): Promise<Movie> {
    return this.prisma.movie.findUnique({
      where: {
        id: movieId,
      },
      include: {
        participants: {
          select: {
            name: true,
            image: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
