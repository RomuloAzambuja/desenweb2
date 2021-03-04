const express = require ('express');
const path = require ('path');
const app = express();
const port = 3000;

//codigo que funciona tive que mover os arquivos estaticos para uma pasta para funcionar o link
app.use(express.static(path.join(__dirname,'publico')));

app.listen(port,() => {
    console.log('teste ouvindo porta')
});
// para ouvir a porta 3000 no prompt deve iniciar o arquivo app.js comando node app.js na pasta onde esta o arquivo

/*ACABEI MOVENDO TODOS OS ARQUIVOS HTML PARA UMA PASTA DENTRO DE ONDE ESTÃO OS ARQUIVOS NODE 
NÃO SEI SE ISSO É CORRETO*/
