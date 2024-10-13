import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class SubmissionRequestDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    student_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    exam_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    option_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    is_correct: boolean;


}