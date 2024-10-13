import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Exam, ExamDocument } from "../schema/exam.schema";


@Injectable() 
export class ExamRepository extends BaseRepository<ExamDocument>{
    constructor(@InjectModel(Exam.name) model:Model<ExamDocument>){
        super(model)
    }

    
}