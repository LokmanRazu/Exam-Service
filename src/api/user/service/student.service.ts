import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { StudentRepository } from "../repository/student.repository";
import { StudentResponseDto } from "../dto/response/student-response.dto";
import { StudentRequestDto } from "../dto/request/student-request.dto";
import { hashPassword } from "src/common/utils";

@Injectable()
export class StudentService {
    constructor(private studentRepository: StudentRepository) { }

    async findAll(): Promise<StudentResponseDto[]> {
        let data = await this.studentRepository.find({})
        return plainToInstance(StudentResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async find(_id: string): Promise<StudentResponseDto[]> {
        let data = await this.studentRepository.find({ _id })
        return plainToInstance(StudentResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async save(dto: StudentRequestDto): Promise<StudentResponseDto> {
        let { name, email, password, profile_pic, parants_id, group_id } = dto;

        let user = await this.studentRepository.save({
            name,
            email,
            password:hashPassword(password),
            profile_pic,
            parants_id,
            group_id
        });
        return plainToInstance(StudentResponseDto, user, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })
    }

    async update(_id: string, dto: StudentRequestDto): Promise<StudentResponseDto> {
        let data = await this.studentRepository.findOneAndUpdate({ _id }, dto)
        return plainToInstance(StudentResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }

    async delete(_id: string): Promise<StudentResponseDto> {
        let data = await this.studentRepository.deleteOne({ _id })
        return plainToInstance(StudentResponseDto, data, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }
}