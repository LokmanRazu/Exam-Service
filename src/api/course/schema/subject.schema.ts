import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Group } from "./group.schema";

export type SubjectDocument = Subject & Document

@Schema({ timestamps: true })
export class Subject {
    @Prop({ required: true })
    name: string

    @Prop({ required: true, type: Types.ObjectId, ref: 'Group' })
    group_id: Types.ObjectId | Group


}

export const SubjectSchema = SchemaFactory.createForClass(Subject)