const express = require ('express');
const app = express();
const path= require ('path');
const routher = express.Router();
const port = 3000;

app.get('/',(req,res)=> {
    // utilizo o __dirname para indicar o diretorio atual 
    res.sendFile(__dirname + '/index.html')
});
app.listen(port,() => {
    console.log('teste ouvindo porta')
});
// para ouvir a porta 3000 no prompt deve iniciar o arquivo app.js comando node app.js na pasta onde esta o arquivo

/*ACABEI MOVENDO TODOS OS ARQUIVOS HTML PARA UMA PASTA DENTRO DE ONDE ESTÃO OS ARQUIVOS NODE 
NÃO SEI SE ISSO É CORRETO*/
