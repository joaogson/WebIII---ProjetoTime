import { PartialType } from "@nestjs/mapped-types";
import { createPlayerDto } from "./create-player.dto";


export class upgradePlayerDto extends PartialType(createPlayerDto){
    
}