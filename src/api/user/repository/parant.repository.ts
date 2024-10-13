import { BaseRepository } from "src/common/database/repository/base.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Parant, ParantsDocument } from "../schema/parants.schema";

@Injectable()
export class ParantRepository extends BaseRepository<ParantsDocument>{
    constructor(@InjectModel(Parant.name) model : Model<ParantsDocument>){
        super(model)
    }
}