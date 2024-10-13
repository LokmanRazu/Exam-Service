import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GroupRequestDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
}