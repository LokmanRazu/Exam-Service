import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose"

export type TeacherDocument = Teacher & Document

@Schema({ timestamps: true })
export class Teacher {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true, trim: true, unique: true })
    email: string

    @Prop({ required: true, trim: true, minlength: 8 })
    password: string

    @Prop()
    profile_pic: string
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher)