import { Resolver, Query } from "type-graphql";
import { User, UserModel } from "../../entities/user-entity";

@Resolver()
export class UserResolver {

    @Query(returns => [User])
    async users(): Promise<User[]> {
        return await UserModel.find({});
    }
}