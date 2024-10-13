import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class ExamResponseDto {

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    start_at: string;

    @ApiProperty()
    @Expose()
    end_at: string;

    @ApiProperty()
    @Expose()
    group_id: string;

    @ApiProperty()
    @Expose()
    subject_id: string;

    @ApiProperty()
    @Expose()
    status: boolean;

}