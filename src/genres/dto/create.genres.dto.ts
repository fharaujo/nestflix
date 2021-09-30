import { IsNotEmpty } from 'class-validator';
export class createGenresDto {
  @IsNotEmpty()
  nome: string;
}
