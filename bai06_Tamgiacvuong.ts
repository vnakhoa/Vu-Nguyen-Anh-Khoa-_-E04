import { question } from "readline-sync";

let a: number = Number(question('Nhap canh a: '));
let b: number = Number(question('Nhap canh b: '));
let c: number = Number(question('Nhap canh c: '));

if((a**2 + b**2) == c**2) {
    console.log('Yes');
}
else {
    if((a**2 +c**2) == b**2) {
        console.log('Yes');
    }
    else {
        if((c**2 + b**2) == a**2) {
            console.log('Yes');
        }
        else {
            console.log('Khong phai la Tam giac vuong');
        }

    }
}