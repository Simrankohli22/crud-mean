const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/routes.js');

const app= express();
app.use(express.json());

app.use(cors());

app.listen(3000,()=>{
    console.log('Server started at port: 3000')
});

app.use('/employees',routes);
