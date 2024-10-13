import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Course } from "./course.schema";
import { Group } from "./group.schema";

export type Courese_mapDocument = Courese_map & Document


@Schema({ timestamps: true })
export class Courese_map {

    @Prop({ required: true, type: Types.ObjectId, ref: 'Course' })
    course_id: Types.ObjectId | Course


    @Prop({ required: true, type: Types.ObjectId, ref: 'Group' })
    group_id: Types.ObjectId | Group

}

export const Courese_mapSchema = SchemaFactory.createForClass(Courese_map)  