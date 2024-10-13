import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { Subject, SubjectDocument } from "../schema/subject.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable() 
export class SubjectRepository extends BaseRepository<SubjectDocument>{
    constructor(@InjectModel(Subject.name) model:Model<SubjectDocument>){
        super(model)
    }
}