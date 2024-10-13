import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class QuestionResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;


    @ApiProperty()
    @Expose()
    group_id: string;

    @ApiProperty()
    @Expose()
    subject_id: string;

    @ApiProperty()
    @Expose()
    mark: number;

}