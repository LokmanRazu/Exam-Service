import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Teacher, TeacherDocument } from "../schema/teachers.schema";


@Injectable()
export class TeacherRepository extends BaseRepository<TeacherDocument>{
    constructor(@InjectModel(Teacher.name) model : Model<TeacherDocument>){
        super(model)
    }
}