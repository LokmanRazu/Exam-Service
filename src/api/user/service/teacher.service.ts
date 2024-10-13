import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { TeacherRepository } from "../repository/teacher.repository";
import { TeacherResponseDto } from "../dto/response/teacher-response.dto";
import { TeacherRequestDto } from "../dto/request/teacher-request.dto";
import { hashPassword } from "src/common/utils";


@Injectable()
export class TeacherService {
    constructor(private teacherRepository: TeacherRepository) { }

    async findAll(): Promise<TeacherResponseDto[]> {
        let data = await this.teacherRepository.find({})
        return plainToInstance(TeacherResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async find(_id: string): Promise<TeacherResponseDto[]> {
        let data = await this.teacherRepository.find({ _id })
        return plainToInstance(TeacherResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async save(dto: TeacherRequestDto): Promise<TeacherResponseDto> {
        let { name, email, password, profile_pic } = dto;

        let user = await this.teacherRepository.save({
            name,
            email,
            password:hashPassword(password),
            profile_pic
        });
        return plainToInstance(TeacherResponseDto, user, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })
    }

    async update(_id: string, dto: TeacherRequestDto): Promise<TeacherResponseDto> {
        let data = await this.teacherRepository.findOneAndUpdate({ _id }, dto)
        return plainToInstance(TeacherResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async delete(_id: string): Promise<TeacherResponseDto> {
        let data = await this.teacherRepository.deleteOne({ _id })
        return plainToInstance(TeacherResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }
}