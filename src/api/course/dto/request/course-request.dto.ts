import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString,IsDate } from "class-validator";

export class CourseRequestDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    start_at: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    end_at: Date;

    @ApiProperty()
    @IsNotEmpty()
    price: number;


}