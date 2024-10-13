import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OptionService } from "../service/option.service";
import { OptionResponseDto } from "../dto/response/option-response.dto";
import { OptionRequestDto } from "../dto/request/option-request.dto";



@Controller({
    path: "options"
})
@ApiTags("Option")
export class OptionController {
    constructor(private optionService: OptionService) { }

    @Get()
    @ApiOkResponse({ type: OptionResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<OptionResponseDto[]> {
        return this.optionService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: OptionResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<OptionResponseDto[]> {
        return this.optionService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: OptionResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: OptionRequestDto): Promise<OptionResponseDto> {
        return await this.optionService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: OptionResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: OptionRequestDto): Promise<OptionResponseDto> {
        return await this.optionService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: OptionResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<OptionResponseDto> {
        return await this.optionService.delete(_id)

    }

}