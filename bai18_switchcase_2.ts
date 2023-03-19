//So ngay cua thang
import { question } from "readline-sync";

let a: number = Number(question('Nhap thang: '));
const m: number = a;

switch(m) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log('31 ngay.');
    break;

    case 2:
        console.log('29 ngay (nam nhuan), 28 ngay (nam binh thuong).');
    break;

    case 4: case 6: case 9: case 11:
        console.log('30 ngay.');
    break;

    default:
        console.log('Khong hop le.');
    break;
}