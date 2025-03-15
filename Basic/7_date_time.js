const myDate = new Date();

let myDate2 = Date.now();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());


let date = new Date(2023, 0, 23);
let date2 = new Date("2023-01-14");
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date2.toLocaleString());



let timeStamp = Date.now();
console.log(Math.ceil(timeStamp / 1000));

let date3 = new Date();
console.log(date3.getMonth());

