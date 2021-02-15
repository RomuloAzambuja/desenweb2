const express = require ('express');
const app = express();
const path= require ('path');
const routher = express.Router();
const port = 3000;

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/recurso/index.html')
});
app.listen(port,() => {
    console.log('teste ouvindo porta')
});
// para o sistema ouvir a porta no prompt de comando digitar 