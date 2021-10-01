"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movies_controller_1 = require("./movies/movies.controller");
const movies_service_1 = require("./movies/movies.service");
const movies_module_1 = require("./movies/movies.module");
const genres_controller_1 = require("./genres/genres.controller");
const genres_service_1 = require("./genres/genres.service");
const genres_module_1 = require("./genres/genres.module");
const participants_controller_1 = require("./participants/participants.controller");
const participants_module_1 = require("./participants/participants.module");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_module_1 = require("./prisma/prisma.module");
const participants_service_1 = require("./participants/participants.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [movies_module_1.MoviesModule, genres_module_1.GenresModule, participants_module_1.ParticipantsModule, prisma_module_1.PrismaModule],
        controllers: [
            app_controller_1.AppController,
            movies_controller_1.MoviesController,
            genres_controller_1.GenresController,
            participants_controller_1.ParticipantsController,
        ],
        providers: [
            app_service_1.AppService,
            movies_service_1.MoviesService,
            genres_service_1.GenresService,
            participants_service_1.ParticipantsService,
            prisma_service_1.PrismaService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map