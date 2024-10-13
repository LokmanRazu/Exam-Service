import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GroupService } from "../service/group.service";
import { GroupRequestDto } from "../dto/request/group-request.dto";
import { GroupResponseDto } from "../dto/response/group-response.dto";

@Controller({
    path: "groups"
})
@ApiTags("Group")
export class GroupController {
    constructor(private groupService: GroupService) { }

    @Get()
    @ApiOkResponse({ type: GroupResponseDto, status: HttpStatus.FOUND })
    async findAll(): Promise<GroupResponseDto[]> {
        return this.groupService.findAll()
    }

    @Get('/:_id')
    @ApiOkResponse({ type: GroupResponseDto, status: HttpStatus.FOUND })
    async findGroup(@Param('_id') _id: string): Promise<GroupResponseDto[]> {
        return this.groupService.find(_id)

    }

    @Post()
    @ApiOkResponse({ type: GroupResponseDto, status: HttpStatus.CREATED })
    async saveGroup(@Body() dto: GroupRequestDto): Promise<GroupResponseDto> {
        return await this.groupService.save(dto)

    }

    @Put('/:_id')
    @ApiOkResponse({ type: GroupResponseDto, status: HttpStatus.OK })
    async updateGroup(@Param('_id') _id: string, @Body() dto: GroupRequestDto): Promise<GroupResponseDto> {
        return await this.groupService.update(_id, dto)

    }

    @Delete('/:_id')
    @ApiOkResponse({ type: GroupResponseDto, status: HttpStatus.OK })
    async deleteGroup(@Param('_id') _id: string): Promise<GroupResponseDto> {
        return await this.groupService.delete(_id)

    }

}