// In ra số âm
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let flag: boolean = false;

if(a<0) {
    console.log(a);
    flag = true;
}

if(b<0) {
    console.log(b);
    flag = true;
}

if(c<0) {
    console.log(c);
    flag = true;
}
    
if(flag == false) {
    console.log('Khong co so am');
}




