const calculateValidationNumber = (input) => {
    if(typeof input != 'number' || input % 1 != 0) return false //checks for whole integer
    
    return (input - 1) % 9 + 1;
}

console.log("|*****************************************************|")
console.log("|*****OUTPUTS calculateValidationNumber('444444')*****|")
console.log("|*****************************************************|")
console.log(`Result:  ${calculateValidationNumber(444444)}`)

console.log("|*****************************************************|")
console.log("|******OUTPUTS calculateValidationNumber('1234')******|")
console.log("|*****************************************************|")
console.log(`Result:  ${calculateValidationNumber(1234)}`)

console.log("|*********************************************************|")
console.log("|******OUTPUTS calculateValidationNumber('23478998')******|")
console.log("|*********************************************************|")
console.log(`Result:  ${calculateValidationNumber(23478998)}`)


//node app/controllers/challengeTwoController.js 