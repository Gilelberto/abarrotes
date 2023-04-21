const Products = require('./products');

let p1 = new Products('./products.mf');
//console.log(p1.data);
console.log(p1.countProductsByExistence(25,'+')); //existencia mayor a 25
console.log(p1.countProductsByExistence(15,'-')); //existencia menor a 15
