import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ExamService } from "../service/exam.service";
import { ExamResponseDto } from "../dto/response/exam-response.dto";
import { ExamRequestDto } from "../dto/request/exam-request.dto";


@Controller({
    path: "exams"
})
@ApiTags("Exam")
export class ExamController {
    constructor(private examService: ExamService) { }

    @Get()
    @ApiOkResponse({ type: ExamResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<ExamResponseDto[]> {
        return this.examService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: ExamResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<ExamResponseDto[]> {
        return this.examService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: ExamResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: ExamRequestDto): Promise<ExamResponseDto> {
        return await this.examService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: ExamResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: ExamRequestDto): Promise<ExamResponseDto> {
        return await this.examService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: ExamResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<ExamResponseDto> {
        return await this.examService.delete(_id)

    }

}