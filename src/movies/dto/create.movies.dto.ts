import { IsNotEmpty, IsOptional } from 'class-validator';

export class createMoviesDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  image?: string;

  @IsNotEmpty()
  date_published: string;
  duration: number;
}
