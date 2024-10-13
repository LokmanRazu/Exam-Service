import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString,IsBoolean } from "class-validator";

export class OptionRequestDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_correct: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_id: string;



}