import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GroupDocument = Group & Document;

@Schema({
    timestamps: true,
    collection:"groups"
})
export class Group {
    @Prop({required:true})
    name: string
}

export const GroupSchema = SchemaFactory.createForClass(Group)