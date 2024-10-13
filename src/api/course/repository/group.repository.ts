import { BaseRepository } from "src/common/database/repository/base.repository";
import { Group, GroupDocument } from "../schema/group.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class GroupRepository extends BaseRepository<GroupDocument>{
    constructor(@InjectModel(Group.name) model : Model<GroupDocument>){
        super(model)
    }
}