import { subDays, format } from 'date-fns';
//Importación de la libreria

const date = new Date(2004, 7, 18); //0=enero
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
