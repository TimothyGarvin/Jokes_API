const JokeController = require('../controllers/joke.controller')

module.exports = (app) => {

    //api test
    app.get('/api/testing', JokeController.apiTest)

    //create joke
    app.post('/api/joke/create', JokeController.create)

    //read jokes
    app.get('/api/jokes', JokeController.getAll)
    app.get('/api/jokes/:id', JokeController.getOne)

    //update jokes
    app.patch('/api/jokes/update/:id', JokeController.updateOne)

    //delete joke
    app.delete('/api/joke/delete/:id', JokeController.delete)
}

//6492c1727f651307a0d88233