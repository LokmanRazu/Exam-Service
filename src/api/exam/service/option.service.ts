import { Injectable } from "@nestjs/common";
import {plainToInstance} from"class-transformer";
import { OptionRepository } from "../repository/option.repository";
import { OptionResponseDto } from "../dto/response/option-response.dto";
import { OptionRequestDto } from "../dto/request/option-request.dto";




@Injectable()
export class OptionService{
    constructor(private optionRepository: OptionRepository){}

    async findAll():Promise<OptionResponseDto[]>{
      let data =  await this.optionRepository.find({})
      return plainToInstance(OptionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<OptionResponseDto[]>{
      let data =  await this.optionRepository.find({_id})
      return plainToInstance(OptionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: OptionRequestDto):Promise<OptionResponseDto>{
      let data =  await this.optionRepository.save(dto);
      return plainToInstance(OptionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:OptionRequestDto):Promise<OptionResponseDto>{
      let data =  await this.optionRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(OptionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<OptionResponseDto>{
      let data =  await this.optionRepository.deleteOne({_id})
      return plainToInstance(OptionResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}