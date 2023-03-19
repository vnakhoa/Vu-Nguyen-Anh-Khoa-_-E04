// Phuong trinh bac nhat
import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));

if(a == 0) {
    if(b == 0) 
        console.log('VSN');
    
    else 
        console.log('VN');
}
else{ 
    let x: number;
    x = -b/a ;
    console.log('Nghiem cua phuong trinh la: x =', x);
}
