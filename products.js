class Products{
    constructor(directory){
        this.directory = directory;
        this.data = this.chargeData(directory);
    }

    chargeData(file){
        let promise = new Promise( (resolve,reject) => {
            const readline = require('readline');
            const fs = require('fs');
            let data = []

            const readInterface = readline.createInterface({
                input: fs.createReadStream(file),
                console: false
            });

            readInterface.on('line', (line) => {
                //console.log(typeof(line));
                data.push(line.split(","));
                //console.log(line);
            });
            
            readInterface.on('close', () => {
                console.log('Lectura de archivo completada.');
                readInterface.close();
                resolve(data);
            });

            readInterface.on('error', (error) => {
                console.log(`Ha ocurrido un error: ${error}`);
                reject();
            });

        });

        return promise;        
    }
}
(async () => {
    let p1 = new Products('./products.mf');
    //await p1.chargeData();
    console.log(await p1.data);
  })();
  
module.exports = Products;