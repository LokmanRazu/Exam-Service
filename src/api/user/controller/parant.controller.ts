import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ParantService } from "../service/parant.service";
import { ParantResponseDto } from "../dto/response/parant-response.dto";
import { ParantRequestDto } from "../dto/request/parant-request.dto";


@Controller({
    path: "parants"
})
@ApiTags("Parant")
export class ParantController {
    constructor(private parantService: ParantService) { }

    @Get()
    @ApiOkResponse({ type: ParantResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<ParantResponseDto[]> {
        return this.parantService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: ParantResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<ParantResponseDto[]> {
        return this.parantService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: ParantResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: ParantRequestDto): Promise<ParantResponseDto> {
        return await this.parantService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: ParantResponseDto, status: HttpStatus.OK})
    async updateGroup(@Param('_id') _id: string, @Body() dto: ParantRequestDto): Promise<ParantResponseDto> {
        return await this.parantService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: ParantResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<ParantResponseDto> {
        return await this.parantService.delete(_id)

    }

}