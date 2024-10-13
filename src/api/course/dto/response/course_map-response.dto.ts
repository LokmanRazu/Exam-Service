import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class Course_mapResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    course_id: string;

    @ApiProperty()
    @Expose()
    group_id: string;

}