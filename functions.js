'use strict';

// 1. isHometown
function isHometown(town) {
    //Given a `town`, return `True` if `town` is 'San Francisco'.
    if (town === 'San Francisco') {
        return true;
    } else {
        return false;
    }
}

console.log(isHometown('Los Angeles'));

// 2. getFullName

function getFullName(firstName, lastName) {
    //Given `first_name` and `last_name`, return a full name.
    return `${firstName} ${lastName}`;
}

console.log(getFullName('Yes', 'Please'));

// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
//Return the total price of an item, figuring in state taxes and fees.

    // Arguments:
    //     base_price (float): Base price of an item
    //     state (str): Two-letter abbreviation of a U.S. state
    //     tax (float): Tax rate. Defaults to 0.05

    // Returns:
    //     float: The total price of an item
    const subtotal = basePrice * (1 + tax)

    let fee = 0
    if (state === "CA") {
        fee = 0.03 * subtotal
    } else if (state === "PA") {
        fee = 2
    } else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1
        } else {
            fee = 3
        }
        }
    return subtotal + fee
}

console.log(calculateTotal(8.00, 'MA'));
console.log(calculateTotal(8.00, 'CA'));
console.log(calculateTotal(8.00, 'PA'));