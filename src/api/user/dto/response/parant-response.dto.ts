import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class ParantResponseDto {

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


}