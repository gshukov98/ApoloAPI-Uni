import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user/user-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import * as path from "path";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { MotorcycleResolver } from "./resolvers/motorcycle/motorcycle-resolver";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AuthResolver,
            MotorcycleResolver
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }]
    });
    return schema
}