import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.ObjectId;

const groupSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  description: String,
  participants: [
      {type:ObjectId, ref:'user'}
  ]
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
function pushUserIntoGroup(res, user, group) {
    Group.findById(group, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            doc.participants.push(user);
            doc.save()
                .then(
                    (updated) => res.json({updated:true}),
                    () => res.json({inserted:false})
            );
        }
    });
}


function getAllUsers(res) {
    User.find().then(
        (users) => res.json(users),
        () => res.json([])
    );
}

function getAllGroups(res) {
    Group.find().populate('participants').exec((err, doc) => {
        if (err) {
            console.log(err);
            res.json(err)
        }
        console.log(doc);
        res.json(doc);
    });
}

function getById(res, id) {
    Group.findById(id).populate("participants").exec((err, doc) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        console.log(doc);
        res.json(doc);
    });
}

function getByName(res, name) {
    Group.find().where("name", new RegExp(name)).populate("participants").exec((err,doc) => {
        if (err) {
            console.log(err);
            res.json(err)
        }
        console.log(doc);
        res.json(doc);
    });
}

export {pushUserIntoGroup, getAllUsers, createUser,createGroup, getAllGroups, getById, getByName}
