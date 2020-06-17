const parse = require('csv-parse');
const fs = require('fs');

const csvData = [];
var temp1 = "Tempo total";

console.time(temp1);
fs.createReadStream(__dirname + '/brasil.csv')
                                    .pipe(
                                        parse({
                                            delimiter: ','
                                        })
                                    )
                                    .on('data', function(dataRow)
                                    {
                                        csvData.push(dataRow);
                                    })
                                    .on('end', function(){

                                            
                                        console.log(csvData);
                                    });
    console.timeEnd(temp1); 

 /*   console.time(temp1);
const readline = require('readline');
//const fs = require('fs');
// iniciamos com um stream de leitura no arquivo:
const rl = readline.createInterface({
  input: fs.createReadStream(__dirname + '/brasil.csv')
});
// função que é executada a cada linha:
rl.on('line', (line) => {
  console.log('', line);
});
// evento executado após ler todas as linhas do arquivo:
rl.on('close', () => {
  console.log('acabou!');
});
console.timeEnd(temp1);
*/
                                                             



        