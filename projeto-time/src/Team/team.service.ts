import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Team } from "./entities/team.entity";
import { createTeamDto } from "./dto/create-team.dto";
import { upgradeTeamDto } from "./dto/upgrade-team.dto";



@Injectable()
export class TeamService{

    private teams: Team[] = [
{
id: 1,
name: 'Vasco',
city: 'Rio de Janeiro',
adress: 'Sao januario',
players: "Fulando, ciclano, beltrano"
},
{
    id: 1,
    name: 'Gremio',
    city: 'Rio Grandoe do sul',
    adress: 'Arena do Gremio',
    players: "Fulando, ciclano, beltrano"
    },
    {
        id: 1,
        name: 'Real Madrid',
        city: 'Real Madrid',
        adress: 'Santiago Bernabeu',
        players: "Fulando, ciclano, beltrano"
        }
    ]

    listAllGuests() {
        return this.teams;
      }
    
      findOne(id: number) {
        const team = this.teams.find((guest) => guest.id == id);
    
      if(team) return this.teams
    
        throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
      }
    
      create(createTeamDto: createTeamDto) {
        const newId = this.teams.length + 1;
    
        const newGuest = {
          id: newId,
          ...createTeamDto,
        };
    
        this.teams.push(newGuest);
    
        return newGuest;
      }
    
      update(id: number, createTeamDto: createTeamDto) {
        const teamIndex = this.teams.findIndex(guest => guest.id == id)
      
    
        if(teamIndex >= 0){
          const teamItem = this.teams[teamIndex]
            this.teams[teamIndex] = {
              ...teamItem,
              ...upgradeTeamDto
          }
        }
          return "Atualizando Convidado"
      }
    
      delete(id: number) {
        const teamIndex = this.teams.findIndex(guest=> guest.id === id)
    
    
        if(teamIndex < 0){
          throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
    }
    
    this.teams.splice(teamIndex, 1)
    
    return "Convidado removido"
      }
}