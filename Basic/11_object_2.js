const tinderUser = {};

tinderUser.id = '123abc'
tinderUser.name = 'mishuk'
tinderUser.islogedIn = false

// console.log(tinderUser);


const regularUser = {
    email: 'mishuk@gmail.com',
    fullName: {
        userfullname: {
            firstname: 'mishuk',
            lstname: 'mishuk'
        }
    }
}

// console.log(regularUser.fullName?.userfullname.firstname);

const obj1 = {
    1: "a", 2: "b"

}
const obj2 = {
    1: "ac", 2: "bc"

}

const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogedIn'));
