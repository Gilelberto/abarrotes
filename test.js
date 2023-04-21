const readInterface = readline.createInterface({
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
  