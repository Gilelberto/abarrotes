const Products = require('./products');
const fs = require('fs');

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function read(text){
    return new Promise((resolve) => {
        rl.question(text, (respuesta) => {
          resolve(respuesta);
        });
      });
}

function printMenu(){
    console.log("=======================");
    console.log("1.- Existencia mayor a 25");
    console.log("2.- Existencia menor a 15.");
    console.log("3.- Listar por precio mayor a 15.50");
    console.log("4.- Lista de productos con precio mayor a 20.30 y menor a 45.00");
    console.log("5.- Número de productos agrupados por su clasificación");
    console.log("99.- Salir");
    console.log("=======================");

};

async function menu() {
    let opt = 0;
    do{
        printMenu();
        opt = await read("Ingrese una opción: ");
        opt = parseInt(opt);
        switch(opt){
            case 1:
                console.log("");
                console.log(p1.countProductsByExistence(25,'+')); //existencia mayor a 25
                break;
            case 2:
                console.log("");
                console.log(p1.countProductsByExistence(15,'-')); //existencia menor a 15
                break;
            case 3:
                console.log("");
                p1.listByClassAndPrice(15.50,'>');
                break;
            case 4:
                p1.listByClassAndRange(20.30,45);
                break;
            case 5:
                p1.countByClass();
                break;
            default:
                break;
        }
    }while(opt != 99);
    rl.close();
    //console.log(regi);
  };

  
let p1 = new Products('./products.mf');
(async function () {
    await menu();
})();







/*/console.log(p1.data);
console.log(p1.countProductsByExistence(25,'+')); //existencia mayor a 25
console.log(p1.countProductsByExistence(15,'-')); //existencia menor a 15
//console.log(p1.groupByClass('vegetales',p1.data)); 
p1.listByClassAndPrice(15.50,'>');
p1.listByClassAndRange(20.30,45);
p1.countByClass();*/