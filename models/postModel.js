const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    author: String,
    poem: String
})

const postModel = mongoose.model('poems', postSchema)

module.exports = postModel