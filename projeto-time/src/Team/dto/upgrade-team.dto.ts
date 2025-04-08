import { PartialType } from "@nestjs/mapped-types";
import { createTeamDto } from "./create-team.dto";


export class upgradeTeamDto extends PartialType(createTeamDto){}