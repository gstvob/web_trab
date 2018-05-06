import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  description: String
});

const Group = mongoose.model('groups', groupSchema);

function createGroup(res, name, status, description) {
    new Group({name, status, description}).save().then(
        (new_group) => res.json({inserted: true, id:new_group._id}),
        () => res.json({inserted: false})
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

export {createGroup, getAllGroups, getById, getByName}
