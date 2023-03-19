import { question } from "readline-sync";

let a: number = Number(question('Nhap so nguyen a: '));

if( a%2 == 0) {
    console.log('Chan');
}
else {
    console.log('Le');
}