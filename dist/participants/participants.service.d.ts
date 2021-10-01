import { PrismaService } from 'src/prisma/prisma.service';
import { Participant, Prisma } from '.prisma/client';
export declare class ParticipantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findMany(): Promise<Participant[]>;
    getByIdParticipant(participantId: number): Promise<Participant>;
    createParticipant(data: Prisma.ParticipantCreateInput): Promise<Participant>;
    updateParticipant(participantId: number, data: Prisma.ParticipantCreateInput): Promise<Participant>;
    deleteParticipant(participantId: number): Promise<Participant>;
}
