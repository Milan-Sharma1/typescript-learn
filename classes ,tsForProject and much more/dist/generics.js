"use strict";
//the Type means here is that value is locked that whatever type of value is comming must return the same type
//it is better because if we are using any on both places it will might take number and it is able to return string if he wants
// <Type> this is the indication of generic type
function identityThree(val) {
    return val;
}
identityThree("2");
//another syntax for this
function identityFour(val) {
    return val;
}
//custom type for generics
function identityFive(val) {
    return val;
}
//we are taking the T type values array so we must return the T type value from that arrry
function getProducts(products) {
    //do some db operations
    const myIndex = 2;
    return products[myIndex]; //returning the one T type value from that array
}
//same thing in arrow funtions
//Imp => sometime we write like
// <T,> it shows that it is not a jsx or hmtl tag it is generic , it is so common and does not affect anything
const getMoreProd = (products) => {
    //do some db operations
    const index = 4;
    return products[index];
};
//we are still restricting that the generic must be type of database
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, {
    connection: "test",
    username: "test",
    password: "test",
});
//this is a generic class that can handle both quiz or course or any case
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
