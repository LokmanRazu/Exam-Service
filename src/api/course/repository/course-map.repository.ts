import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Courese_map, Courese_mapDocument } from "../schema/course_map.Schema";

@Injectable() 
export class CourseMapRepository extends BaseRepository<Courese_mapDocument>{
    constructor(@InjectModel(Courese_map.name) model:Model<Courese_mapDocument>){
        super(model)
    }
}