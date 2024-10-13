import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { SubmissionRepository } from "../repository/submission.repository";
import { SubmissionResponseDto } from "../dto/response/submission-response.dto";
import { SubmissionRequestDto } from "../dto/request/submission-request.dto";




@Injectable()
export class SubmissionService{
    constructor(private submissionRepository: SubmissionRepository){}

    async findAll():Promise<SubmissionResponseDto[]>{
      let data =  await this.submissionRepository.find({})
      return plainToInstance(SubmissionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<SubmissionResponseDto[]>{
      let data =  await this.submissionRepository.find({_id})
      return plainToInstance(SubmissionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: SubmissionRequestDto):Promise<SubmissionResponseDto>{
      let data =  await this.submissionRepository.save(dto);
      return plainToInstance(SubmissionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:SubmissionRequestDto):Promise<SubmissionResponseDto>{
      let data =  await this.submissionRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(SubmissionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<SubmissionResponseDto>{
      let data =  await this.submissionRepository.deleteOne({_id})
      return plainToInstance(SubmissionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}