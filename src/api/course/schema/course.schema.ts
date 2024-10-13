import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CourseDocument = Course & Document

@Schema({ timestamps: true })
export class Course {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true })
    start_at: Date

    @Prop({ required: true })
    end_at: Date

    @Prop({ required: true })
    price: number
}

export const CourseSchema = SchemaFactory.createForClass(Course)