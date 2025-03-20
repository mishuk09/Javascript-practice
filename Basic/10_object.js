//object

const mySym = Symbol("key1");

const jsUser = {
    [mySym]: 'mykey',
    name: 'Mishuk',
    "full Name": "Mahadi Hasan Mishuk",
    age: 25,
    email: 'mishukinfo09@gmail.com',
    isLogedIn: false,
    lastLogin: ["monday", "sunday"]
}

// const res = jsUser.email
// console.log(res);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = 'mishuk@chstgpt';
// Object.freeze(jsUser);
jsUser.email = 'mishuk@microsofts';
// console.log(jsUser);


jsUser.print = function () {
    console.log(`Hello ${this.name}`);

}
console.log(jsUser.print());



