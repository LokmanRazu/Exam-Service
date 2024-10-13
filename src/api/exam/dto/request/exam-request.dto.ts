import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString,IsDate,IsBoolean } from "class-validator";

export class ExamRequestDto{
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
    @IsString()
    group_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    subject_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    status: boolean;


}