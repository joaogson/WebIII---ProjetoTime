
import { IsNumber, IsString, isString, MaxLength, MinLength } from "class-validator"
import { Team } from "src/Team/entities/team.entity"

export class createPlayerDto{

    @IsString({message: "O nome deve ser uma string"})
    @MinLength(2, {message: "O nome deve ter no minimo dois caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 50 caracteres"})
    readonly name: string

    @IsNumber()
    @MinLength(1, {message: "Deve ter no minimo um caracter"})
    readonly number: number

    @IsString({message: "A posição deve ser uma string"})
    @MinLength(3, {message: "Deve ter no minimo 3 caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 50 caracteres"})
    readonly position: string

    @IsNumber()
    @MinLength(1, {message: "Deve ter no minimo um caracter"})
    readonly age: number

    @IsString({message: "A posição deve ser uma string"})
    @MinLength(2, {message: "Deve ter no minimo 2 caracteres"})
    @MaxLength(50, {message: "É permitido no maximo 50 caracteres"})
    readonly team: Team
}