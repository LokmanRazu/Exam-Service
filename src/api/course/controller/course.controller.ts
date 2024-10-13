import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CourseService } from "../service/course.service";
import { CourseResponseDto } from "../dto/response/course-response.dto";
import { CourseRequestDto } from "../dto/request/course-request.dto";

@Controller({
    path: "courses"
})
@ApiTags("Course")
export class CourseController {
    constructor(private courseService: CourseService) { }

    @Get()
    @ApiOkResponse({ type: CourseResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<CourseResponseDto[]> {
        return this.courseService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: CourseResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<CourseResponseDto[]> {
        return this.courseService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: CourseResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: CourseRequestDto): Promise<CourseResponseDto> {
        return await this.courseService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: CourseResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: CourseRequestDto): Promise<CourseResponseDto> {
        return await this.courseService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: CourseResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<CourseResponseDto> {
        return await this.courseService.delete(_id)

    }

}