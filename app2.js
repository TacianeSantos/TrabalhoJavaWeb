const neatCsv = require('neat-csv');
const fs = require('fs')

var tempo = new Date();
var tmpAbertura = "Tempo de abertura: ";



console.time(tmpAbertura);
fs.open('./brasil.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Abriu arquivo');
    console.timeEnd(tmpAbertura);
})




const startLeitura = tempo.getMilliseconds();
fs.readFile('./brasil.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(await neatCsv(data))
    const finishLeitura = tempo.getMilliseconds();
    const totalLeitura = finishLeitura - startLeitura;


  //  console.log(`Tempo de Leitura: ${totalLeitura}ms`);
    console.log(`Tempo inicial: ${startLeitura}ms`);
    console.log(`Tempo de Leitura: ${finishLeitura}ms`);


})

//Convertendo para Json
const startConvert = tempo.getMilliseconds();
const csv_arq = './brasil.csv'
const csv = require('csvtojson')

csv()
    .fromFile('./brasil.csv')
    .then((jsonArq) => {
        var jsonData = JSON.stringify(jsonArq); // convertendo para string
        console.log(jsonArq);

        const finishConvert = tempo.getMilliseconds();
        const totalConvert = finishConvert - startConvert;

        var cont = 0;
        const startGrava = tempo.getMilliseconds();
        fs.writeFile("teste.txt", jsonData, function (err) {
            if (err) {
                console.log(err);
            }
            cont++;



        });
        const finishGrava = tempo.getMilliseconds();
        const media = ((startGrava) / cont);
        const totalGrava = finishGrava - startGrava;






        console.log(`Tempo Inicio Conversão: ${startConvert}ms`);
        console.log(`Tempo final Conversão : ${finishConvert}ms`);
       // console.log(`Tempo de Conversão: ${totalConvert}ms`);

      //  console.log(`Tempo de Gravação: ${totalGrava}ms`);
        console.log(`Tempo inicial Gravação: ${startGrava}ms`);
        console.log(`Tempo final Gravação: ${finishGrava}ms`);
        console.log(`Tempo medio: ${media}ms `);





    })





