"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require("./db");

var db = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
//import schema from "./apollo";

var DATABASE = process.env.DATABASE;

var app = (0, _express2.default)();

if (DATABASE === undefined) {
    console.log("Banco de dados indefinido");
    process.exit(1);
}

_mongoose2.default.connect(DATABASE);

app.use(_bodyParser2.default.json());
app.get("/allusers", function (req, res) {
    return db.getAllUsers(res);
});
app.get('/listGroups', function (req, res) {
    return db.getAllGroups(res);
});
app.get("/findById", function (req, res) {
    var id = req.query.id;
    db.getById(res, id);
});
app.get("/findByName", function (req, res) {
    var name = req.query.name;
    db.getByName(res, name);
});
app.post('/createGroup', function (req, res) {
    var name = req.body.name;
    var status = req.body.status;
    var description = req.body.description;
    if (description === undefined) {
        description = "No description provided";
    }
    db.createGroup(res, name, status, description);
});
app.post("/createuser", function (req, res) {
    var username = req.body.username;
    db.createUser(res, username);
});
app.post("/pushuser", function (req, res) {
    var idUser = req.body.idUser;
    var idGroup = req.body.idGroup;
    db.pushUserIntoGroup(res, idUser, idGroup);
});

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

app.listen(3001, function () {
    return console.log("Listening in port 3001");
});