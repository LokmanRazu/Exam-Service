import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { StudentService } from "../service/student.service";
import { StudentResponseDto } from "../dto/response/student-response.dto";
import { StudentRequestDto } from "../dto/request/student-request.dto";


@Controller({
    path: "students"
})
@ApiTags("Student")
export class StudentController {
    constructor(private studentService: StudentService) { }

    @Get()
    @ApiOkResponse({ type: StudentResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<StudentResponseDto[]> {
        return this.studentService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: StudentResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<StudentResponseDto[]> {
        return this.studentService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: StudentResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: StudentRequestDto): Promise<StudentResponseDto> {
        return await this.studentService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: StudentResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: StudentRequestDto): Promise<StudentResponseDto> {
        return await this.studentService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: StudentResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<StudentResponseDto> {
        return await this.studentService.delete(_id)

    }

}