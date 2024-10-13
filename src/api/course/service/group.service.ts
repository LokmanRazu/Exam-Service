import { Injectable } from "@nestjs/common";
import { GroupRepository } from "../repository/group.repository";
import { GroupRequestDto } from "../dto/request/group-request.dto";
import { GroupResponseDto } from "../dto/response/group-response.dto";
import {plainToInstance} from"class-transformer";

@Injectable()
export class GroupService{
    constructor(private groupRepository: GroupRepository){}

    async findAll():Promise<GroupResponseDto[]>{
      let data =  await this.groupRepository.find({})
      return plainToInstance(GroupResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async find(_id:string):Promise<GroupResponseDto[]>{
      let data =  await this.groupRepository.find({_id})
      return plainToInstance(GroupResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async save(dto: GroupRequestDto):Promise<GroupResponseDto>{
      let data =  await this.groupRepository.save(dto);
      return plainToInstance(GroupResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })
    }

    async update(_id:string,dto:GroupRequestDto):Promise<GroupResponseDto>{
      let data =  await this.groupRepository.findOneAndUpdate({_id},dto)
      return plainToInstance(GroupResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }

    async delete(_id:string):Promise<GroupResponseDto>{
      let data =  await this.groupRepository.deleteOne({_id})
      return plainToInstance(GroupResponseDto, data,{
        enableImplicitConversion: true,
        excludeExtraneousValues: true
      })

    }
}