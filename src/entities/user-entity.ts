import { ObjectType, Field, Authorized } from "type-graphql";
import { prop as Prop, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Motorcycle } from "./motorcycle-entity";
import { UserRoles } from "../resolvers/user/user-role";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class User {

    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true })
    @Field()
    firstName: string;

    @Prop({ required: true })
    @Field()
    lastName: string;

    @Prop({ required: true })
    @Field()
    email: string;

    @Prop({ required: true })
    @Field()
    password: string;

    @Prop({ default: Date.now() })
    @Field()
    lastLogin?: number;

    @Field(type => [Motorcycle])
    @Prop({ default: [] })
    motorcycles?: Motorcycle[]

    @Authorized([UserRoles.SUPER_ADMIN])
    @Field(type => [String])
    @Prop({ default: [UserRoles.USER] })
    roles?: string[]
}

export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } })