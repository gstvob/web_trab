"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

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