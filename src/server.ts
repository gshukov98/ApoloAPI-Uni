import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import "reflect-metadata";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { getSchema } from "./schema"

import dotenv from "dotenv";
dotenv.config();

const graphQlPath = process.env.GRAPHQL_PATH;
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URL;

mongoose.connect(dbUrl, {
    autoIndex: true
}).then(() => {
    console.log("Connected to mongoDB!");
}).catch((e) => {
    console.log(e);
})

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    app.use(
        graphQlPath,
        cors({
            origin: '*'
        }),
        bodyParser.json()
    )

    const schema = await getSchema();

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        introspection: true
    });
    await server.start();

    server.applyMiddleware({ app, path: '/' });
    await new Promise(resolve => httpServer.listen({ port }));

    console.log(`Server started at http://localhost:${port}/${graphQlPath}`)
    return {server, app}
}

startApolloServer()