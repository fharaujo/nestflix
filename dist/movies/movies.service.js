"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MoviesService = class MoviesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMany() {
        return this.prisma.movie.findMany();
    }
    async getByIdMovies(movieId) {
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
    async createMovie(data) {
        return this.prisma.movie.create({ data });
    }
    async updateMovie(movieId, data) {
        return this.prisma.movie.update({
            where: { id: movieId },
            data,
        });
    }
    async deleteMovie(id) {
        return this.prisma.movie.delete({
            where: { id },
        });
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map