import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { TeacherService } from "../service/teacher.service";
import { TeacherResponseDto } from "../dto/response/teacher-response.dto";
import { TeacherRequestDto } from "../dto/request/teacher-request.dto";



@Controller({
    path: "teachers"
})
@ApiTags("Teacher")
export class TeacherController {
    constructor(private teacherService: TeacherService) { }

    @Get()
    @ApiOkResponse({ type: TeacherResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<TeacherResponseDto[]> {
        return this.teacherService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: TeacherResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<TeacherResponseDto[]> {
        return this.teacherService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: TeacherResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: TeacherRequestDto): Promise<TeacherResponseDto> {
        return await this.teacherService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: TeacherResponseDto, status: HttpStatus.OK})
    async updateGroup(@Param('_id') _id: string, @Body() dto: TeacherRequestDto): Promise<TeacherResponseDto> {
        return await this.teacherService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: TeacherResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<TeacherResponseDto> {
        return await this.teacherService.delete(_id)

    }

}