import { ObjectType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Motorcycle {
    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true })
    @Field()
    make: string;

    @Prop({ required: true })
    @Field()
    model: string;

    @Prop({ required: true })
    @Field()
    category: string;

    @Prop({ required: true })
    @Field()
    image: string;
}

export const MotorcycleModel = getModelForClass(Motorcycle, { schemaOptions: { timestamps: true } })