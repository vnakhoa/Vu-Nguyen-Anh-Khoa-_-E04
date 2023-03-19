import { question } from "readline-sync";

let x: number = Number(question('Nhap so nguyen x: '));

if(x<0) {
    console.log('Yes');
}
else {
    console.log('No')
}