import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SubjectService } from "../service/subject.service";
import { SubjectRepository } from "../repository/subject.repository";
import { SubjectResponseDto } from "../dto/response/subject-response.dto";
import { SubjectRequestDto } from "../dto/request/subject-request.dto";


@Controller({
    path: "subjects"
})
@ApiTags("Subject")
export class SubjectController {
    constructor(private subjectService: SubjectService) { }

    @Get()
    @ApiOkResponse({ type: SubjectRepository, status: HttpStatus.FOUND })
    async findAll(): Promise<SubjectResponseDto[]> {
        return this.subjectService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: SubjectResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<SubjectResponseDto[]> {
        return this.subjectService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: SubjectResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: SubjectRequestDto): Promise<SubjectResponseDto> {
        return await this.subjectService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: SubjectResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: SubjectRequestDto): Promise<SubjectResponseDto> {
        return await this.subjectService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: SubjectResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<SubjectResponseDto> {
        return await this.subjectService.delete(_id)

    }

}