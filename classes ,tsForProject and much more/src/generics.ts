//the Type means here is that value is locked that whatever type of value is comming must return the same type
//it is better because if we are using any on both places it will might take number and it is able to return string if he wants
// <Type> this is the indication of generic type
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree("2");

//another syntax for this
function identityFour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: String;
  type: Number;
}
//custom type for generics
function identityFive<Bottle>(val: Bottle): Bottle {
  return val;
}

//we are taking the T type values array so we must return the T type value from that arrry
function getProducts<T>(products: T[]): T {
  //do some db operations
  const myIndex = 2;
  return products[myIndex]; //returning the one T type value from that array
}
//same thing in arrow funtions
//Imp => sometime we write like
// <T,> it shows that it is not a jsx or hmtl tag it is generic , it is so common and does not affect anything
const getMoreProd = <T>(products: T[]): T => {
  //do some db operations
  const index = 4;
  return products[index];
};

//someting more about generics type

interface database {
  connection: string;
  username: string;
  password: string;
}
//we are still restricting that the generic must be type of database
function anotherFunction<T, U extends database>(valOne: T, valTwo: U): object {
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

//another example for this
interface quiz {
  name: string;
  type: string;
}
interface course {
  name: string;
  author: string;
  subject: string;
}
//this is a generic class that can handle both quiz or course or any case
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
