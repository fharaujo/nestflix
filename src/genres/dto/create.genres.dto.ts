import { IsNotEmpty, IsOptional } from 'class-validator';
export class createGenresDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  movieId: number;
}
