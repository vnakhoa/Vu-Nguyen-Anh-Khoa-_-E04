//Tam giác cân (Làm bằng 2 cách)

import { question } from "readline-sync";

let a: number = Number(question('Nhap canh a: '));
let b: number = Number(question('Nhap canh b: '));
let c: number = Number(question('Nhap canh c: '));

// Cách 1
console.log('CÁCH 1:');

if(a==b || b==c || a==c) {
    console.log('Yes');
}
else {
    console.log('No');
}

//Cách 2
console.log('CÁCH 2:');

if(a!=b && b!=c && c!=a) {
    console.log('No');
}
else {
    console.log('Yes');
}