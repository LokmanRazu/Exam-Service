import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { QuestionService } from "../service/question.service";
import { QuestionResponseDto } from "../dto/response/question-response.dto";
import { QuestionRequestDto } from "../dto/request/question-request.dto";


@Controller({
    path: "questions"
})
@ApiTags("Question")
export class QuestionController {
    constructor(private questionService: QuestionService) { }

    @Get()
    @ApiOkResponse({ type: QuestionResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<QuestionResponseDto[]> {
        return this.questionService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: QuestionResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<QuestionResponseDto[]> {
        return this.questionService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: QuestionResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: QuestionRequestDto): Promise<QuestionResponseDto> {
        return await this.questionService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: QuestionResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: QuestionRequestDto): Promise<QuestionResponseDto> {
        return await this.questionService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: QuestionResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<QuestionResponseDto> {
        return await this.questionService.delete(_id)

    }

}