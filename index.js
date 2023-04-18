const express = require('express');
const app = express();
const colors = require('colors');
//connection settings
//model connections
require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const { userAddController, usersController, usersByIdController, postDataController, deleteUserByIdController, patchUserByIdController, queryController } = require('./controller/userController')

const PORT = 4050;
app.get('/', (req, res) => {
    return res.status(200).send('Hello World')
})

app.get('/dataAdd', userAddController)


app.get('/users', usersController)
app.get('/users/:id', usersByIdController)
app.delete('/users/:id', deleteUserByIdController)
app.patch('/users/:id', patchUserByIdController)



// ! querys
app.get('/queries', queryController)


app.post('/users', postDataController)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`.yellow.underline);
})