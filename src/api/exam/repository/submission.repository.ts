import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Submission, SubmissionDocument } from "../schema/submission.schema";


@Injectable() 
export class SubmissionRepository extends BaseRepository<SubmissionDocument>{
    constructor(@InjectModel(Submission.name) model:Model<SubmissionDocument>){
        super(model)
    }
}