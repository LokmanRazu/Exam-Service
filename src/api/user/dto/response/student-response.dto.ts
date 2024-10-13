import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class StudentResponseDto {

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    email: string;

    @ApiProperty()
    @Expose()
    password: string;

    @ApiProperty()
    @Expose()
    profile_pic: string;

    @ApiProperty()
    @Expose()
    parants_id: string

    @ApiProperty()
    @Expose()
    group_id: string

}