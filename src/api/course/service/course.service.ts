import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { CourseRepository } from "../repository/course.repository";
import { CourseResponseDto } from "../dto/response/course-response.dto";
import { CourseRequestDto } from "../dto/request/course-request.dto";

@Injectable()
export class CourseService{
    constructor(private courseRepository: CourseRepository){}

    async findAll():Promise<CourseResponseDto[]>{
      let data =  await this.courseRepository.find({})
      return plainToInstance(CourseResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<CourseResponseDto[]>{
      let data =  await this.courseRepository.find({_id})
      return plainToInstance(CourseResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: CourseRequestDto):Promise<CourseResponseDto>{
      let data =  await this.courseRepository.save(dto);
      return plainToInstance(CourseResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:CourseRequestDto):Promise<CourseResponseDto>{
      let data =  await this.courseRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(CourseResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<CourseResponseDto>{
      let data =  await this.courseRepository.deleteOne({_id})
      return plainToInstance(CourseResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}