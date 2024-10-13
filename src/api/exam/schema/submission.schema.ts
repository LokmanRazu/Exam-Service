import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Student } from "src/api/user/schema/students.schema";
import { Exam } from "./exam.schema";
import { Option } from "./option.schema";
import { Question } from "./question.schema";

export type SubmissionDocument = Submission & Document


@Schema({ timestamps: true })
export class Submission {

    @Prop({ required: true, type: Types.ObjectId, ref: 'Student' })
    student_id: Types.ObjectId | Student


    @Prop({ required: true, type: Types.ObjectId, ref: 'Exam' })
    exam_id: Types.ObjectId | Exam


    @Prop({ required: true, type: Types.ObjectId, ref: 'Option' })
    option_id: Types.ObjectId | Option

    @Prop({ required: true, type: Types.ObjectId, ref: 'Question' })
    question_id: Types.ObjectId | Question

    @Prop({ required: true })
    is_correct: boolean



}

export const SubmissionSchema = SchemaFactory.createForClass(Submission) 