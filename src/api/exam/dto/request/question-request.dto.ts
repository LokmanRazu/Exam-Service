import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString,IsNumber } from "class-validator";

export class QuestionRequestDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    group_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    subject_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    mark: number;


}