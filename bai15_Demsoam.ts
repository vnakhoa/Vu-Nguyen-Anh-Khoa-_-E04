//Dem so am
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let s: number = 0;

if(a<0) {
    s +=1;
}
else {
    s = s;
}

if(b<0) {
    s +=1;
}
else {
    s = s;
}

if(c<0) {
    s +=1;
}
else {
    s = s;
}

console.log('So luong so am la:',s);

