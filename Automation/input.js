const random = require('generate-random-data');
export const inputTextBox = {
    fullName : "IT START",
    email: "info@itstart.us",
    currentAddress: "USA Florida",
    permanentAddress: "USA Florida, Jax"
}

export function webTableData () {
return {
    firstName : random.maleFirstName(),
    lastName : random.lastName(),
    userEmail: random.email('gmail.com'),
    age: random.int(20,50),
    salary : random.int(20000,500000),
    department: random.word(10, 15)
}
}