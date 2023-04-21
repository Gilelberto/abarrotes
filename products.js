class Products{
    constructor(directory){
        this.directory = directory;
        this.data = [];
        const fs = require('fs');
        const file = fs.readFileSync(directory, 'utf-8').split('\n');
        file.forEach(line => {
            this.data.push(line.split(",")); 
        });
    }

    countProductsByExistence(n,operator){
        let counter = 0;
        //console.log(this.data.length);
        if (operator == '+'){
            for(let i = 0; i < this.data.length; i++ ){
                //console.log("ENTRAAAAAAAA");
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
    }

    groupBy(){
        
    }
}

/*(async () => {
    let p1 = new Products('./products.mf');
    await p1.data;
    //console.log(await p1.data);
    console.log(await p1.countProductsByExistence(25,'+'));
  })();*/


  
module.exports = Products;