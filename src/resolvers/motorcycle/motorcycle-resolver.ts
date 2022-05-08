import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { MotorcycleInput } from "./motorcycle-arguments";
import { Motorcycle, MotorcycleModel } from "../../entities/motorcycle-entity";

@Resolver()
export class MotorcycleResolver {

    @Query(returns => [Motorcycle])
    async motorcycles(): Promise<Motorcycle[]> {
        return await MotorcycleModel.find({});
    }

    @Query(returns => Motorcycle)
    async motorcycleById(@Arg("_id") _id: string): Promise<Motorcycle> {
        return await MotorcycleModel.findById(_id);
    }

    @Mutation(returns => Motorcycle)
    async createMotorcycle(@Arg("data") data: MotorcycleInput): Promise<Motorcycle> {
        const newUser = new MotorcycleModel(data);
        return newUser.save();
    }

    @Mutation(returns => Motorcycle)
    async editMotorcycle(@Arg("_id") _id: string, @Arg("data") data: MotorcycleInput): Promise<Motorcycle> {
        return await MotorcycleModel.findByIdAndUpdate(_id, data, { new: true });
    }

    @Mutation(returns => Motorcycle)
    async deleteMotorcycle(@Arg("_id") _id: string): Promise<Motorcycle> {
        return await MotorcycleModel.findByIdAndRemove(_id);
    }
}