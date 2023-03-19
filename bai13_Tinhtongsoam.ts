//Tinh tong so am
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let flag: boolean = false;

if(a<0) {
    a = a;
    flag = true;
}
else {
    a = 0;
}

if(b<0) {
    b = b;
    flag = true;
}
else {
    b = 0;
}

if(c<0) {
    c = c;
    flag = true;
}
else {
    c = 0;
}

if(flag == false) {
    console.log('Khong co so am');
}
else {
    let S: number = a + b + c;
    console.log('Tong cac so am la:',S);
}