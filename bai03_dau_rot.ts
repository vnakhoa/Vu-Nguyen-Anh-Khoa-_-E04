import { question } from "readline-sync";
let average_point:number = Number(question('Nhap diem trung binh: '));

if( average_point >=5)
    console.log('Dau');
else 
    console.log('Rot');
