import { IsNotEmpty } from 'class-validator';
export class createParticipantsDto {
  @IsNotEmpty()
  nome: string;
  image: string;
  birth: string;
  staff: string;
}
