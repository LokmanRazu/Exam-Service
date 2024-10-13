import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { ExamRepository } from "../repository/exam.repository";
import { ExamResponseDto } from "../dto/response/exam-response.dto";
import { ExamRequestDto } from "../dto/request/exam-request.dto";



@Injectable()
export class ExamService{
    constructor(private examRepository: ExamRepository){}

    async findAll():Promise<ExamResponseDto[]>{
      let data =  (await this.examRepository.find({}))
      return plainToInstance(ExamResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<ExamResponseDto[]>{
      let data =  await this.examRepository.find({_id})
      return plainToInstance(ExamResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: ExamRequestDto):Promise<ExamResponseDto>{
      let data =  await this.examRepository.save(dto);
      return plainToInstance(ExamResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:ExamRequestDto):Promise<ExamResponseDto>{
      let data =  await this.examRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(ExamResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<ExamResponseDto>{
      let data =  await this.examRepository.deleteOne({_id})
      return plainToInstance(ExamResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}