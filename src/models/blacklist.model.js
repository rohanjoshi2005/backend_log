const mongoose = require('mongoose');



const tokenBlacklistSchema = new mongoose.Schema({
    token : {
        type : String,
        required : [true,"Token is required for creating a token blacklist"],
        unique : [true,"Token must be unique"],
    }
}, {
    timestamps : true
})




tokenBlacklistSchema.index({
    createdAt : 1,
} , {
    expireAfterSeconds : 60*60*24*2 // expire after 2 days
})


const tokenBlacklistModel = mongoose.model("tokenBlacklist",tokenBlacklistSchema);

module.exports = {
    tokenBlacklistModel
}