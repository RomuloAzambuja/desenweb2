const express = require ('express');
const app = express();
const path= require ('path');
const routher = express.Router();


app.get('/', function (req,res){
    res.send('Olá mundo')
});
app.listen(3000;)