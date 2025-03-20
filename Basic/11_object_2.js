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

console.log(regularUser.fullName?.userfullname.firstname);
