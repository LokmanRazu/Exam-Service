import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class SubmissionResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    student_id: string;


    @ApiProperty()
    @Expose()
    exam_id: string;

    @ApiProperty()
    @Expose()
    option_id: string;

    @ApiProperty()
    @Expose()
    question_id: string;

    @ApiProperty()
    @Expose()
    is_correct: boolean;

}