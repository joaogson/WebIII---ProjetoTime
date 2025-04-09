import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CONTROLLER_WATERMARK } from "@nestjs/common/constants";
import { TeamService } from "./team.service";
import { createTeamDto } from "./dto/create-team.dto";


@Controller('/team')
export class TeamController{
    constructor(private readonly teamService: TeamService){}

    @Get()
    getAll(@Query('limit') limit: string){
        return this.teamService.listAllGuests()
    }
    
    @Get(":id")
    getById(@Param('id', ParseIntPipe) id: number){
        return this.teamService.findOne(id)
    }
    
    @Post("/create")
    CreateGuest(@Body() createTeamDto: createTeamDto){
        return this.teamService.create(createTeamDto)
    }
    
    @Patch(":id")
    updateGuest(@Param("id", ParseIntPipe) id:number, @Body() createTeamDto:createTeamDto){
    
        return this.teamService.update(id, createTeamDto)
    }
    
    @Delete(":id")
    deleteGuest(@Param("id", ParseIntPipe) id: number){
    return this.teamService.delete(id)
    }
}