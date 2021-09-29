import { IsNotEmpty, IsOptional } from 'class-validator';

export class createMoviesDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  image?: string;

  data_published: string;
  duration: number;
}
