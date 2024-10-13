import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Question, QuestionDocument } from "../schema/question.schema";


@Injectable() 
export class QuestionRepository extends BaseRepository<QuestionDocument>{
    constructor(@InjectModel(Question.name) model:Model<QuestionDocument>){
        super(model)
    }
}