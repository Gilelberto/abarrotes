/*const readInterface = readline.createInterface({
    input: fs.createReadStream('products.mf'),
    console: false
});

readInterface.on('line', function(line) {
    console.log(typeof(line));
    console.log(line);
});

readInterface.on('close', function() {
    console.log('Lectura de archivo completada.');
    readInterface.close();
});
  */

let numero = ' 25';
let a = parseInt(numero);
console.log(a);

        let counter = 0;
        console.log(this.data.length);
        if (operator == '+'){
            for(let i = 0; i < this.data.length; i++ ){
                console.log("ENTRAAAAAAAA");
                if(parseInt(this.data[i][2]) >= n){
                    counter++;
                }
            }
        }
        else if (operator == '-'){
            for(let i = 0; i < this.data.length; i++ ){
                if(parseInt(this.data[i][2]) < n){
                    counter++;
                }
            }
        }
        return counter;