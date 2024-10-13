import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Question } from "./question.schema";

export type OptionDocument = Option & Document


@Schema({ timestamps: true })
export class Option {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true })
    is_correct: boolean

    @Prop({ required: true, type: Types.ObjectId, ref: 'Question' })
    question_id: Types.ObjectId | Question

}

export const OptionSchema = SchemaFactory.createForClass(Option)