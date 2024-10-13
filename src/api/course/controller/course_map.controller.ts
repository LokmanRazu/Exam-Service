import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Course_mapService } from "../service/course_map.service";
import { Course_mapResponseDto } from "../dto/response/course_map-response.dto";
import { Course_mapRequestDto } from "../dto/request/course_map-request.dto";

@Controller({
    path: "courses_map"
})
@ApiTags("Course_map")
export class Course_mapController {
    constructor(private course_mapService: Course_mapService) { }

    @Get()
    @ApiOkResponse({ type: Course_mapResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<Course_mapResponseDto[]> {
        return this.course_mapService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: Course_mapResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<Course_mapResponseDto[]> {
        return this.course_mapService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: Course_mapResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: Course_mapRequestDto): Promise<Course_mapResponseDto> {
        return await this.course_mapService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: Course_mapResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: Course_mapRequestDto): Promise<Course_mapResponseDto> {
        return await this.course_mapService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: Course_mapResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<Course_mapResponseDto> {
        return await this.course_mapService.delete(_id)

    }

}