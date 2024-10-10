// interface ObjType{
//     firstName: string;
//     lastName: string;
//     age: number;
//     place: string;
// }

// let obj: ObjType = {
//     firstName: "shanavas",
//     lastName: "Rahman",
//     age: 25,
//     place:"Palakkad"
// }

// for (let key in obj) {
//     console.log(obj[key as keyof typeof obj]);
// }

//Accept a char input from the user and display it on the console.

// function print(arg:string): void{
//     console.log(arg);
// }

// print("shanavas");


// function sum(num1: number, num2: number): number{
//     return num1 + num2;
// }
// let result: number = sum(3, 2);
// console.log(result);

// function multiply(num: number): void{
//     for (let i = 1; i <= 10; i++){
//         console.log(`${i} x ${num} = ${i * num}`);
//     }
// }
// multiply(5);

function swapping(arr1: number[],arr2: number[]){
    let temp: number[] = [...arr2];
    arr2.splice(0, arr2.length, ...arr1);
    arr1.splice(0, arr1.length, ...temp);
}

let arr1: number[] = [15, 25, 35, 45, 55];
let arr2: number[] = [10, 20, 30, 40, 50];

swapping(arr1, arr2);
console.log(arr1);
console.log(arr2);