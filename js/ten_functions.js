function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function addOne(input) {
    return parseFloat(input) + 1;
}

function not(input) {
    return !input;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isIdentical(input, input1) {
    return input === input1;
}

function isEqual(input, input1) {
    return input == input1;
}

function or(input, input1) {
    return input || input1;
}

function and(input, input1) {
    return input && input1;
}

function concat(input, input1) {
    return input.toString() + input1.toString();