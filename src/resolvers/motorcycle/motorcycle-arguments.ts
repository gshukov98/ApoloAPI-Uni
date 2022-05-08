import { Length, MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Motorcycle } from "../../entities/motorcycle-entity";

@InputType()
export class EditMotorcycleInput {
    @Field()
    @Length(1, 30)
    make: string;

    @Field()
    @Length(1, 30)
    model: string;

    @Field()
    @Length(1, 30)
    category: string;

    @Field()
    @MinLength(5)
    image: string;
}

@InputType()
export class MotorcycleInput implements Partial<Motorcycle> {

    @Field()
    _id: ObjectId;

    @Field()
    make: string;

    @Field()
    model: string;

    @Field()
    category: string;

    @Field()
    image: string;
}