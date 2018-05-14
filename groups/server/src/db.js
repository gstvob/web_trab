import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  description: String
});

//apenas uma tabela para colocar usuário para razões de teste.
const userSchema = new mongoose.Schema({
    username: String
});


const Group = mongoose.model('groups', groupSchema);
const User = mongoose.model('user', userSchema);

function createUser(res, username) {
    new User({username}).save().then(
        (new_user) => res.json({inserted: true, id:new_user._id}),
        () => res.json({inserted:false})
    );
}


function createGroup(res, name, status, description) {
    new Group({name, status, description}).save().then(
        (new_group) => res.json({inserted: true, id:new_group._id}),
        () => res.json({inserted: false})
    );
}

function getAllUsers(res) {
    User.find().then(
        (users) => res.json(users),
        () => res.json([])
    );
}

function getAllGroups(res) {
    Group.find().then(
        (groups) => res.json(groups),
        () => res.json([])
    );
}

function getById(res, id) {
    Group.findById(id)
    .then(
        (group) => res.json(group),
        () => res.json(null)
    );
}

function getByName(res, name) {
    Group.find().where("name", new RegExp(name))
    .then(
        (groups) => res.json(groups),
        () => res.json([])
    );
}

export {getAllUsers, createUser,createGroup, getAllGroups, getById, getByName}
