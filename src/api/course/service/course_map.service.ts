import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { CourseMapRepository } from "../repository/course-map.repository";
import { Course_mapResponseDto } from "../dto/response/course_map-response.dto";
import { Course_mapRequestDto } from "../dto/request/course_map-request.dto";


@Injectable()
export class Course_mapService{
    constructor(private courseMapRepository: CourseMapRepository){}

    async findAll():Promise<Course_mapResponseDto[]>{
      let data =  await this.courseMapRepository.find({})
      return plainToInstance(Course_mapResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<Course_mapResponseDto[]>{
      let data =  await this.courseMapRepository.find({_id})
      return plainToInstance(Course_mapResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: Course_mapRequestDto):Promise<Course_mapResponseDto>{
      let data =  await this.courseMapRepository.save(dto);
      return plainToInstance(Course_mapResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:Course_mapRequestDto):Promise<Course_mapResponseDto>{
      let data =  await this.courseMapRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(Course_mapResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<Course_mapResponseDto>{
      let data =  await this.courseMapRepository.deleteOne({_id})
      return plainToInstance(Course_mapResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}