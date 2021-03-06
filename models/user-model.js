const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const usersCollection = mongoose.model('users', userSchema);

const Users = {
    createUser: function(newUser) {
        return usersCollection
            .create(newUser)
            .then(user => {
                return user;
            })
            .catch(err => {
                throw new Error(err.message);
            }); 
    },
    getUserByEmail: function(email) {
        return usersCollection
            .findOne({email})
            .then(user => {
                return user;
            })
            .catch(err => {
                throw new Error(err.message);
            }); 
    }
};

module.exports = {Users};