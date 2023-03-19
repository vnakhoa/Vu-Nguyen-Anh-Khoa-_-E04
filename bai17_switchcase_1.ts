// Cach doc so nguyen
import { question } from "readline-sync";

let a: number = Number(question('Nhap so nguyen (1 chu so) a: '));

const x: number = a;

switch(x) {
    case 0:
        console.log('Khong');
    break;
    
    case 1:
        console.log('Mot');
    break;

    case 2:
        console.log('Hai');
    break;

    case 3:
        console.log('Ba');
    break;

    case 4:
        console.log('Bon');
    break;

    case 5:
        console.log('Nam');
    break;

    case 6:
        console.log('Sau');
    break;

    case 7:
        console.log('Bay');
    break;

    case 8:
        console.log('Tam');
    break;

    case 9:
        console.log('Chin');
    break;

    default:
        console.log('Khong hop le');
    break;
}