import { Module } from "@nestjs/common";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";



@Module({
    imports: [],
    controllers: [TeamController],
    exports: [TeamService]
})
export class TeamModule{}