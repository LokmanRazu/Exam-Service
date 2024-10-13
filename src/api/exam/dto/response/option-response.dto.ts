import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class OptionResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    is_correct: boolean;

    @ApiProperty()
    @Expose()
    question_id: string;


}