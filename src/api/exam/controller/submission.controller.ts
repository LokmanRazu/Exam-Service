import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SubmissionService } from "../service/submission.service";
import { SubmissionResponseDto } from "../dto/response/submission-response.dto";
import { SubmissionRequestDto } from "../dto/request/submission-request.dto";



@Controller({
    path: "submissions"
})
@ApiTags("Submission")
export class SubmissionController {
    constructor(private submissionService: SubmissionService) { }

    @Get()
    @ApiOkResponse({ type: SubmissionResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<SubmissionResponseDto[]> {
        return this.submissionService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: SubmissionResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<SubmissionResponseDto[]> {
        return this.submissionService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: SubmissionResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: SubmissionRequestDto): Promise<SubmissionResponseDto> {
        return await this.submissionService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: SubmissionResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: SubmissionRequestDto): Promise<SubmissionResponseDto> {
        return await this.submissionService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: SubmissionResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<SubmissionResponseDto> {
        return await this.submissionService.delete(_id)

    }

}