//Phuong trinh bac hai
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

let k: number = b**2 - 4*a*c ;

if(k>0) {
    let x1: number;
    x1 = (-b + Math.sqrt(k))/(2*a);

    let x2: number;
    x2 = (-b - Math.sqrt(k))/(2*a);

    console.log('Phuong trinh co 2 nghiem la:',x1, x2);
}
else {
    if(k == 0) {
        let x: number;
        x = -b/(2*a);
        console.log('Phuong trinh co nghiem kep: x = ',x);
    }
    else {
        console.log('Phuong trinh vo nghiem');
    }
}