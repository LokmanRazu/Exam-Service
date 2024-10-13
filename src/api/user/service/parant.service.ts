import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { ParantRepository } from "../repository/parant.repository";
import { ParantResponseDto } from "../dto/response/parant-response.dto";
import { ParantRequestDto } from "../dto/request/parant-request.dto";
import { hashPassword } from "src/common/utils";


@Injectable()
export class ParantService {
    constructor(private parantRepository: ParantRepository) { }

    async findAll(): Promise<ParantResponseDto[]> {
        let data = await this.parantRepository.find({})
        return plainToInstance(ParantResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async find(_id: string): Promise<ParantResponseDto[]> {
        let data = await this.parantRepository.find({ _id })
        return plainToInstance(ParantResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async save(dto: ParantRequestDto): Promise<ParantResponseDto> {
        let { name, email, password, profile_pic } = dto;

        let user = await this.parantRepository.save({
            name,
            email,
            password:hashPassword(password),
            profile_pic
        });
        return plainToInstance(ParantResponseDto, user, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })
    }

    async update(_id: string, dto: ParantRequestDto): Promise<ParantResponseDto> {
        let data = await this.parantRepository.findOneAndUpdate({ _id }, dto)
        return plainToInstance(ParantResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async delete(_id: string): Promise<ParantResponseDto> {
        let data = await this.parantRepository.deleteOne({ _id })
        return plainToInstance(ParantResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }
}