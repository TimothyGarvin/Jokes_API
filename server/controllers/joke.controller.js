const { text } = require('express')
const Joke = require('../models/joke.model')


//test
module.exports.apiTest = (req,res) => {
    res.json({message: "Test"})
}

//create
module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => {res.json({results: newJoke})})
    .catch((err) => res.json({err:err}))
}
//read
module.exports.getAll = (req,res) => {
    Joke.find()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch((err) => res.json({err:err}))
}

module.exports.getOne = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then((oneJoke) => {res.json({results: oneJoke})})
    .catch((err) => res.json({err:err}))
}

//update
module.exports.updateOne = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((updatedJoke) => {res.json({ joke: updatedJoke})})
    .catch((err) => res.json({err:err}))
}
//delete
module.exports.delete = (req,res) => {
    Joke.deleteOne ({_id: req.params.id})
    .then(result => {req.json({result:result})})
    .catch((err) => res.json({err:err}))
}