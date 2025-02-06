import path from 'path';

// Definir una ruta para el archivo de ejemplo
const filePath = './data/ejemplo.txt';

// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newFile.txt');
console.log('Nueva ruta:', newPath);

