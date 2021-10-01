import { IsNotEmpty } from 'class-validator';
export class createParticipantsDto {
  @IsNotEmpty()
  name: string;
  image: string;
  birth: string;
  staff: string;
}
