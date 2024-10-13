import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document} from "mongoose"

export type ParantsDocument = Parant & Document

@Schema()
export class Parant {
    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true, trim: true, unique: true })
    email: string

    @Prop({ required: true, trim: true, minlength: 8 })
    password: string

    @Prop()
    profile_pic: string
}

export const ParantsSchema = SchemaFactory.createForClass(Parant)