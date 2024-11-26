const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:  50
    },
    email: {
        type: String,
        trim: true, // 문장의 space를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 유저의 타입(일반, 관리자)
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { // token을 사용할 수 있는 유효기간
        type: Number
    }
});

const User = mongoose.model('User',userSchema);

module.exports = {User}; // model을 다른 곳에서 쓸 수 있도록 함