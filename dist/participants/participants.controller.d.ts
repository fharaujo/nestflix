import { ParticipantsService } from './participants.service';
import { createParticipantsDto } from './dto/create.participants.dto';
import { Participant } from '.prisma/client';
export declare class ParticipantsController {
    private readonly participantsService;
    constructor(participantsService: ParticipantsService);
    getAll(): Promise<Participant[]>;
    getByIdParticipant(id: number): Promise<Participant>;
    createParticipant(data: createParticipantsDto): Promise<Participant>;
    updateParticipant(id: number, data: createParticipantsDto): Promise<Participant>;
    deleteOneParticipant(id: number): Promise<Participant>;
}
