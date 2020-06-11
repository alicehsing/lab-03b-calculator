const addButton = document.getElementById('button-one');


addButton.addEventListener('click', () => {
    // grab the two input boxes and calling it "input1" & "input 2"
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    // grab the result span
    const resultSpan = document.getElementById('sum-result');
    // change the input values from strings to numbers
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    // add the two input values and calling it "sum"
    const sum = firstValue + secondValue;
    // set resultSpan text content to the sum
    resultSpan.textContent = sum;
});


const subtractionButton = document.getElementById('button-two');

subtractionButton.addEventListener('click', () => {
    // grab the two input boxes and calling it "input1" & "input2"
    const input1 = document.getElementById('subtract-one');
    const input2 = document.getElementById('subtract-two');
    //grab the result span
    const resultSpan = document.getElementById('subtraction-result');
    // change the input vlaues fron strings to numbers
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    // subtract the two input values and calling it "subtraction"
    const subtraction = firstValue - secondValue;
    // set the resultSpan text content to the subtraction
    resultSpan.textContent = subtraction;
});



const MultiplicationButton = document.getElementById('button-three');

MultiplicationButton.addEventListener('click', () => {
    // grab the two input boxes and calling it "input1" & "input2"
    const input1 = document.getElementById('multiply-one');
    const input2 = document.getElementById('multiply-two');
    //grab the result span
    const resultSpan = document.getElementById('sumproduct-result');
    // change the input vlaues fron strings to numbers
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    // multiply the two input values and calling it "multiplication"
    const multiplication = firstValue * secondValue;
    // set the resultSpan text content to the multiplication
    resultSpan.textContent = multiplication;
});


const DivisionButton = document.getElementById('button-four');

DivisionButton.addEventListener('click', () => {
    // grab the two input boxes and calling it "input1" & "input2"
    const input1 = document.getElementById('divide-one');
    const input2 = document.getElementById('divide-two');
    //grab the result span
    const resultSpan = document.getElementById('division-result');
    // change the input vlaues fron strings to numbers
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    // divide the two input values and calling it "division"
    const division = firstValue / secondValue;
    // set the resultSpan text content to the division
    resultSpan.textContent = division;
});

