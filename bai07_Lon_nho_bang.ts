//Xuất ra số Lon Nho Bang
import { question } from "readline-sync";

let a: number = Number(question('Nhap a: '));
let b: number = Number(question('Nhap b: '));

if(a>b) {
    console.log('Lon');
}
else {
    if(a==b) {
        console.log('Bang');
    }
    else {
        console.log('Nho');
    }
}