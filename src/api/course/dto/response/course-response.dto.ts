import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class CourseResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    start_at: Date;

    @ApiProperty()
    @Expose()
    end_at: Date;

    @ApiProperty()
    @Expose()
    price: number

}