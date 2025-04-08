import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";


@Controller('/player')
export class PlayerController{

    @Get()
    getAllPlayers(){

    }

    @Get('/:id')
    getPlayerById(){

    }

    @Patch("/upgrade/:id")
    updatePlayer(){

    }

    @Post("/create/:id")
    createPlayer(){

    }

    @Delete("/delete/:id")
    removePlayer(){

    }
}