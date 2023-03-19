import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let flag: boolean = false;

let D: number = a%2;
if(D == 0) {
    console.log(a);
    flag = true;
}

let E: number = b%2;
if(E == 0) {
    console.log(b);
    flag = true;
}

let F: number = c%2;
if(F == 0) {
    console.log(c);
    flag = true;
} 

if(flag == false){
    console.log('Khong co so chan'); 
}