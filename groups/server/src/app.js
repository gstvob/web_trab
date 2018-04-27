import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
//import schema from "./apollo";

const DATABASE = process.env.DATABASE;

const app = express();

if (DATABASE === undefined) {
     console.log("Banco de dados indefinido");
     process.exit(1);
}

mongoose.connect(DATABASE);

app.use(bodyParser.json());
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
//
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
//
// app.get("/private",(req, res) => {
//         privateProfiles.find().then(
//             (smth) => res.json(smth),
//             () => res.json([])
//         );
//     });
// app.get("/public",(req, res) => {
//         dummyProfiles.find().then((smth) => res.json(smth), () => res.json([]));
//     });

app.listen(3001, () => console.log("Listening in port 3001"));
