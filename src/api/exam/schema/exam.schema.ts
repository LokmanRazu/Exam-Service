import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Group } from "src/api/course/schema/group.schema";
import { Subject } from "src/api/course/schema/subject.schema";

export type ExamDocument = Exam & Document


@Schema({ timestamps: true })
export class Exam {
    @Prop({ required: true, trim: true,
        //  validate: { validator: function (element) { return element = this.status } }
         })
    name: string

    @Prop({ required: true })
    start_at: Date

    @Prop({ required: true })
    end_at: Date

    @Prop({ required: true, type: Types.ObjectId, ref: 'Group' })
    group_id: Types.ObjectId | Group

    @Prop({ required: true, type: Types.ObjectId, ref: 'Subject' })
    subject_id: Types.ObjectId | Subject

    @Prop({ required: true })
    status: boolean

}

export const ExamSchema = SchemaFactory.createForClass(Exam)