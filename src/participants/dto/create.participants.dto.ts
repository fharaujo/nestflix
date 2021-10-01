import { IsNotEmpty } from 'class-validator';
export class createParticipantsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  birth: string;

  @IsNotEmpty()
  staff: string;
}
