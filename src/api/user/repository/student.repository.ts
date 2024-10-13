import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Student, StudentsDocument } from "../schema/students.schema";

@Injectable()
export class StudentRepository extends BaseRepository<StudentsDocument>{
    constructor(@InjectModel(Student.name) model : Model<StudentsDocument>){
        super(model)
    }
}