import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Parant } from "./parants.schema"

import { Document, Types } from "mongoose"
import { Group } from "src/api/course/schema/group.schema";

export type StudentsDocument = Student & Document

@Schema({ timestamps: true })
export class Student {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true, trim: true, unique: true })
    email: string

    @Prop({ required: true, trim: true, minlength: 8 })
    password: string

    @Prop()
    profile_pic: string

    @Prop({ required: true, type: Types.ObjectId, ref: 'Parant', default: 'string' })
    parants_id: Types.ObjectId | Parant

    @Prop({ required: true, type: Types.ObjectId, ref: 'Group' })
    group_id: Types.ObjectId | Group
}

export const StudentsSchema = SchemaFactory.createForClass(Student)