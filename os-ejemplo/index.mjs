import os from 'os';

// Obtener la arquitecuta del sistema
console.log('Arquitectura:', os.arch());

// Obtener el tipo de sistema operativo
console.log('Plataforma:', os.platform());

// Obtener la cantidad total de memoria
console.log('Memoria total:', os.totalmem());

// Obtener el tamaño de la memoria libre
console.log('Memoria libre:', os.freemem());

// Obtener información de la CPU
console.log('Informacion de la CPU:', os.cpus());
