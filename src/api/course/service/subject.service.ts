import { Injectable } from "@nestjs/common";
import { SubjectRepository } from "../repository/subject.repository";
import { plainToInstance } from "class-transformer";
import { GroupResponseDto } from "../dto/response/group-response.dto";
import { SubjectResponseDto } from "../dto/response/subject-response.dto";
import { SubjectRequestDto } from "../dto/request/subject-request.dto";

@Injectable()
export class SubjectService{
    constructor(private subjectRepository:SubjectRepository){}

    async findAll():Promise<SubjectResponseDto[]>{
        let data =  await this.subjectRepository.find({})
        return plainToInstance(SubjectResponseDto, data,{
          enableImplicitConversion: true,
          excludeExtraneousValues: true
        })
  
      }
  
      async find(_id:string):Promise<SubjectResponseDto[]>{
        let data =  await this.subjectRepository.find({_id})
        return plainToInstance(SubjectResponseDto, data,{
          enableImplicitConversion: true,
          excludeExtraneousValues: true
        })
  
      }
  
      async save(dto: SubjectRequestDto):Promise<SubjectResponseDto>{
        let data =  await this.subjectRepository.save(dto);
        return plainToInstance(SubjectResponseDto, data,{
          enableImplicitConversion: true,
          excludeExtraneousValues: true
        })
      }
  
      async update(_id:string,dto:SubjectRequestDto):Promise<SubjectResponseDto>{
        let data =  await this.subjectRepository.findOneAndUpdate({_id},dto)
        return plainToInstance(SubjectResponseDto, data,{
          enableImplicitConversion: true,
          excludeExtraneousValues: true
        })
  
      }
  
      async delete(_id:string):Promise<SubjectResponseDto>{
        let data =  await this.subjectRepository.deleteOne({_id})
        return plainToInstance(SubjectResponseDto, data,{
          enableImplicitConversion: true,
          excludeExtraneousValues: true
        })
  
      }

}