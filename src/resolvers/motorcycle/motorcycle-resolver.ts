import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { EditMotorcycleInput } from "./motorcycle-arguments";
import { Motorcycle, MotorcycleModel } from "../../entities/motorcycle-entity";
import { UserRoles } from "../user/user-role";

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
    async createMotorcycle(@Arg("data") data: EditMotorcycleInput): Promise<Motorcycle> {
        const newUser = new MotorcycleModel(data);
        return newUser.save();
    }

    @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    @Mutation(returns => Motorcycle)
    async editMotorcycle(@Arg("_id") _id: string, @Arg("data") data: EditMotorcycleInput): Promise<Motorcycle> {
        return await MotorcycleModel.findByIdAndUpdate(_id, data, { new: true });
    }

    @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    @Mutation(returns => Motorcycle)
    async deleteMotorcycle(@Arg("_id") _id: string): Promise<Motorcycle> {
        return await MotorcycleModel.findByIdAndRemove(_id);
    }
}