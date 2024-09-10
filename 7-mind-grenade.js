const num1 = 5;
const num2 = 10;

//this function will run when imported/required in the different file
function addValues() {
    console.log(`the sum is ${num1 + num2}`);
}

addValues();