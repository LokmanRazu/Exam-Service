import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Group } from "src/api/course/schema/group.schema";
import { Subject } from "src/api/course/schema/subject.schema";

export type QuestionDocument = Question & Document


@Schema({ timestamps: true })
export class Question {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true, type: Types.ObjectId, ref: 'Group' })
    group_id: Types.ObjectId | Group

    @Prop({ required: true, type: Types.ObjectId, ref: 'Subject' })
    subject_id: Types.ObjectId | Subject

    @Prop({ required: true })
    mark: number

}

export const QuestionSchema = SchemaFactory.createForClass(Question)