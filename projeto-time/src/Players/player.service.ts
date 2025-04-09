import {HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Player } from "./entities/player.entity";
import { PlayerController } from "./player.controller";
import { createPlayerDto } from "./dto/create-player.dto";
import { updatePlayerDto } from "./dto/update-player.dto";


@Injectable()
export class PlayerService{

private players: Player[] = [
    {
        id:1,
        name: 'Neymar',
        number: 11,        
        position: 'right Wing',
        age: 34,
        team: 'Vasco'
    },
    {
        id:1,
        name: 'Messi',
        number: 10,        
        position: 'mid Fielder',
        age: 36,
        team: 'Vasco'
    },
    {
        id:1,
        name: 'Cristiano Ronaldo',
        number: 7,        
        position: 'Striker',
        age: 39,
        team: 'Vasco'
    },
]

    listAllPlayer(){
        return this.players;
}
    findOne(id: number) {
        const player = this.players.find(Player => Player.id == id);

if(player) return player

        throw new HttpException("Esse jogador não existe", HttpStatus.NOT_FOUND);
        
}

    create(createPlayerDto: createPlayerDto){
        const newId = this.players.length + 1;

        const newPlayer = {
            id: newId,
            ...createPlayerDto
};

    this.players.push(newPlayer);
}

    update(id: number, UpodatePlayerDto: updatePlayerDto){
        const playerIndex = this.players.findIndex(Player => Player.id == id);

if(playerIndex >- 0){
    const playerItem = this.players[playerIndex]
    this.players[playerIndex] = {
        ...playerItem,
        ...updatePlayerDto
}

    return "Atualizando Convidado"
}
}

delete(id: number){
    const playerIndex = this.players.findIndex(Player => Player.id == id);

if(playerIndex < 0 )
    throw new HttpException("Esse jogador não existe!", HttpStatus.NOT_FOUND)

    this.players.splice(playerIndex, 1)

    return "Jogador Removido"

}
}