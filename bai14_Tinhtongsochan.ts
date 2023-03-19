//Tinh tong so chan
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let flag: boolean = false;

let D: number = a%2;
if(D == 0) {
    a = a;
    flag = true;
}
else {
    a = 0;
}

let E: number = b%2;
if(E == 0) {
    b = b;
    flag = true;
}
else {
    b = 0;
}

let F: number = c%2;
if(F == 0) {
    c = c;
    flag = true;
} 
else {
    c =0;
}

if(flag == false){
    console.log('Khong co so chan'); 
}
else {
    let S: number = a + b + c;
    console.log('Tong cac so chan la:',S);
}