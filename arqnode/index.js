const express = require ('express');
const app = express();
const path= require ('path');
const routher = express.Router();
const port = 3000;

app.get('/',(req,res)=> {
    res.send('Olá mundo')
});
app.listen(port,() => {
    console.log('teste ouvindo porta')
});
