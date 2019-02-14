function validateNumber(number) {
    const pattern = /^[0-9]*$/;
    return pattern.test(number);
}

export {
    validateNumber  
};