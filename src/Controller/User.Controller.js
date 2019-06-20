// @ts-check
var mongoose = require('../Schema/Schema.Mapper');
var UserSchema = mongoose.model('User');

// Required to implement findByToken(key) function

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var User = new UserSchema({
                username: data.username,
                role: data.role,
                fname: data.fname,
                lname: data.lname,
                telno: data.telno,
                email: data.email,
                password: data.password,
                dept: data.dept,
                regDate: data.regDate
            })
            User.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new User"
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            UserSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "User Updated"
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            UserSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    data: data
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            UserSchema.findById(id).exec().then(User => {
                resolve({
                    status: 200,
                    data: User
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            UserSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'User Deleted'
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
}