import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Option, OptionDocument } from "../schema/option.schema";


@Injectable() 
export class OptionRepository extends BaseRepository<OptionDocument>{
    constructor(@InjectModel(Option.name) model:Model<OptionDocument>){
        super(model)
    }
}