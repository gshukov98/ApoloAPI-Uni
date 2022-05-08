import { Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class MotorcycleInput {
    @Field()
    @Length(1,30)
    make: string;

    @Field()
    @Length(1,30)
    model: string;

    @Field()
    @Length(1,30)
    category: string;

    @Field()
    @MinLength(5)
    image: string;
}