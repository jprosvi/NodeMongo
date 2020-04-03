const express = require('express')
const postRouter = express.Router()
const postModel = require('../models/postModel')


postRouter.get('/', (req, res) => {
    postModel.find((error, data) => {
        if(data){
            res.json(data)
        } else {
            res.send("No records")
            console.log(error)
        }
    })
})

postRouter.post('/', (req, res) => {
    const poema = new postModel({
        author: req.body.author,
        poem: req.body.poem
    })
    poema.save()
    console.log(poema)
    res.json(poema)
})

postRouter.get('/:id', (req, res) => {
    postModel.findById(req.params.id,(error, data) => {
        if(error) res.status(500).send(error)
        if(data){
            res.json(data)
        } else {
            res.send(`ID: ${req.params.id} not found`)
            console.log(error)
        }
    })

})

postRouter.put('/:id', (req, res) => {
    postModel.findById(req.params.id, (error, data) => {
        if(error) res.status(500).send(error)
        if(data) {
            data.author = req.body.author
            data.poem = req.body.poem
            data.save()
            res.json(data)
            console.log(data)
        } else {
            res.send(`ID: ${req.params.id} not found`)
            console.log(error)
        }
    })
})

postRouter.delete('/:id', (req, res) => {
    postModel.findByIdAndDelete(req.params.id, (error, data) => {
        if(error) res.status(500).send(error)
        if(data) {
            res.send(`ID ${req.params.id} deleted`)
        } else {
            res.send(`ID ${req.params.id} not found`)
        }
    })
})

module.exports = postRouter