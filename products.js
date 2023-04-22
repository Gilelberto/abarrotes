const { Console } = require('console');

class Products{
    constructor(directory){
        this.directory = directory;
        this.data = [];
        const fs = require('fs');
        const file = fs.readFileSync(directory, 'utf-8').split('\n');
        file.forEach(line => {
            this.data.push(line.split(",").map(x => x.trim())); 
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

    countByClass(){
        console.log(`=====Conteo por clase=====`);
        let types = this.getTypes();
        for(let typ in types){
            let products = this.groupByClass(types[typ],this.data);        
            console.log(`Tipo: ${types[typ]}, existen: ${products.length} productos.`);
        }
    }

    getTypes(){
        let types = [];
        for(let i = 0; i<this.data.length;i++){
            if(!types.includes(this.data[i][1])){
                types.push(this.data[i][1]);
            }
        }
        return types;
    }
    groupByClass(typ,data){
    
        let products = [];
        for(let i = 0; i<data.length;i++){
            if(data[i][1] == typ){
                products.push(data[i]);
            }
        }
        return products;
    }


    listByClassAndPrice(price,operator){
        console.log(`=====Lista de productos con precio ${operator} a ${price}=====`);
        let types = this.getTypes();
        for(let typ in types){
            
            let products = this.groupByClass(types[typ],this.data);
            //console.log(products);
            let finalProducts = [];
            for(let p in products){
                if(operator == '>'){
                    if (products[p][3] >= price ){
                        finalProducts.push(products[p]);
                    }
                }
                else if (operator == '<'){
                    if (products[p][3] <= price ){
                        finalProducts.push(products[p]);
                    }
                }
            }
            if (finalProducts > []){
                console.log("Tipo: " + types[typ]);
                console.log(finalProducts);}
        }
    }

    listByClassAndRange(min,max){
        console.log(`=====Lista de productos con precio entre ${max} y ${min}=====`);
        let types = this.getTypes();
        for(let typ in types){
            
            let products = this.groupByClass(types[typ],this.data);
            //console.log(products);
            let finalProducts = [];
            for(let p in products){
                if (products[p][3] >= min && products[p][3] <= max ){
                    finalProducts.push(products[p]);
                }
            }
            
            if (finalProducts > []){
                console.log("Tipo: " + types[typ]);
                console.log(finalProducts);}
        }
    }

}

/*(async () => {
    let p1 = new Products('./products.mf');
    await p1.data;
    //console.log(await p1.data);
    console.log(await p1.countProductsByExistence(25,'+'));
  })();*/


  
module.exports = Products;