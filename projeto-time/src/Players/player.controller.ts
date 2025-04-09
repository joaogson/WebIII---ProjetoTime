import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { PlayerService } from "./player.service";
import { upgradeTeamDto } from "src/Team/dto/upgrade-team.dto";
import { createPlayerDto } from "./dto/create-player.dto";


@Controller('/player')
export class PlayerController{

    constructor(private readonly playerService: PlayerService){}
    @Get()
    getAllPlayers(){
        return this.playerService.listAllPlayer
    }

    @Get('/:id')
    getPlayerById(id: number){
        return this.playerService.findOne(id)
    }

    @Patch("/upgrade/:id")
    updatePlayer(@Param("id", ParseIntPipe) id:number , @Body() upgradeTeamDto: upgradeTeamDto){
        return this.playerService.update
    }

    @Post("/create/:id")
    createPlayer(@Body() createPlayerDto: createPlayerDto){
        return this.playerService.create(createPlayerDto)
    }

    @Delete("/delete/:id")
    removePlayer(@Param("id", ParseIntPipe) id: number){
        return this.playerService.delete(id);
    }
}