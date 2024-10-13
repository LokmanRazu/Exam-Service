import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type OrderDocument = Order & Document

@Schema()
export class Order {
    @Prop({ required: true })
    invoice_id: 'string'

    @Prop({ required: true, type: Types.ObjectId, ref: '' })
    user_id: Types.ObjectId

    @Prop({ required: true })
    payment_status: boolean

    @Prop({ required: true })
    Payment_amount: number

    @Prop({ required: true })
    price: number

    @Prop({ required: true, type: Types.ObjectId, ref: '' })
    course_id: Types.ObjectId

    @Prop({ required: true })
    order_item: JSON

}

export const OrderSchema = SchemaFactory.createForClass(Order)