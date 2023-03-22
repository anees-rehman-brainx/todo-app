const express = require('express');
const bodyParser = require('body-parser');
const {register, login} = require('./controller/user-controller')
const userRoutes = require("./routes/user-route")
const todoRoutes = require('./routes/todo-route');
require('dotenv').config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port =  process.env.port || 3001;

app.use('/user', userRoutes);
app.use('/todo',todoRoutes);

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})