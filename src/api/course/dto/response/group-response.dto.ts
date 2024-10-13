import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose, Transform } from "class-transformer";


export class GroupResponseDto{

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;
}