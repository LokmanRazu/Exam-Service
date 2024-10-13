import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class StudentRequestDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    profile_pic: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    parants_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    group_id: string;

}