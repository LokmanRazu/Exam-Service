import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { QuestionRepository } from "../repository/question.repository";
import { QuestionResponseDto } from "../dto/response/question-response.dto";
import { QuestionRequestDto } from "../dto/request/question-request.dto";




@Injectable()
export class QuestionService{
    constructor(private questionRepository: QuestionRepository){}

    async findAll():Promise<QuestionResponseDto[]>{
      let data =  await this.questionRepository.find({})
      return plainToInstance(QuestionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<QuestionResponseDto[]>{
      let data =  await this.questionRepository.find({_id})
      return plainToInstance(QuestionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: QuestionRequestDto):Promise<QuestionResponseDto>{
      let data =  await this.questionRepository.save(dto);
      return plainToInstance(QuestionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:QuestionRequestDto):Promise<QuestionResponseDto>{
      let data =  await this.questionRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(QuestionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<QuestionResponseDto>{
      let data =  await this.questionRepository.deleteOne({_id})
      return plainToInstance(QuestionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}