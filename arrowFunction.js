//function expression

const client = function(clientName) {
    console.log('Mostrando datos del cliente: ' + clientName);
}

client('Juan');

// arrow functions

const clientA = (clientName) => {
    console.log('Mostrando datos del cliente: ' + clientName);
}

clientA('Marcos Lopez');