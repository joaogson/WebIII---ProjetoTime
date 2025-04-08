import { IsObject, IsString, MaxLength, MinLength } from "class-validator"
import { Player } from "src/Players/entities/player.entity"


export class createTeamDto{

    @IsString({message: "Deve ser uma string"})
    @MinLength(2, {message: "Deve ter no minimo dois caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 50 caracteres"})
    name: string

    @IsString({message: "Deve ser uma string"})
    @MinLength(2, {message: "Deve ter no minimo dois caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 50 caracteres"})
    city: string

    @IsString({message: "Deve ser uma string"})
    @MinLength(2, {message: "Deve ter no minimo dois caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 150 caracteres"})
    adress: string

    @IsObject()
    players: Player[]

}