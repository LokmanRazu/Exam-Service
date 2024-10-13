import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Course_mapRequestDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    course_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    group_id: string;

}