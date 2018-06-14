import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import * as db from "./db"
//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
//import schema from "./apollo";

const DATABASE = "mongodb://admin:admin@ds111103.mlab.com:11103/groups"
const app = express();

if (DATABASE === undefined) {
     console.log("Banco de dados indefinido");
     process.exit(1);
}

mongoose.connect(DATABASE);

app.use(bodyParser.json());
app.use(express.static('../public'));
app.get("/allusers", (req, res) => db.getAllUsers(res));
app.get('/listGroups', (req, res) => db.getAllGroups(res));
app.get("/findById", (req,res) => {
    let id = req.query.id
    db.getById(res,id)
})
app.get("/findByName", (req, res) => {
    let name = req.query.name
    db.getByName(res, name)
})
app.get("/login", (req, res) => {
    let name = req.query.username
    db.getUserByName(res,name)
})
app.get("/usergroups", (req, res) => {
    let user = req.query.user;
    db.findGroupByUser(res, user)
})
app.post('/createGroup', (req, res) => {
  let name = req.body.name
  let status = req.body.status
  let description = req.body.description
  let admin = req.body.admin
  if (description === undefined) {
      description = "No description provided";
  }
  db.createGroup(res, name, status, description, admin)
});
app.post("/createuser", (req,res) => {
    let username = req.body.username
    db.createUser(res, username)
});
app.post("/pushuser", (req,res) => {
    let idUser = req.body.idUser
    let idGroup = req.body.idGroup
    db.pushUserIntoGroup(res, idUser, idGroup);
})

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
