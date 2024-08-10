// function declaration

function saludar(name) {
    console.log('Bienvenido ' + name);
}

saludar('Juan');

// function expression

const client = function(clientName) {
    console.log('Mostrando datos del cliente: ' + clientName);
}

client('Juan');

function activity(name, activity) {
    console.log('La persona ' + name + ', esta realizando la actividad ' + activity);
}

activity('Juan', 'Aprendiendo JavaScript');