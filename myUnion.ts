//it can be of both type number or string
let score: number | string;
score = 3;

function plus(x: number | string): void {
  //checking need to be performed before using any inbuilt function
  if (typeof x === "number") {
    x.toFixed();
  }
  if (typeof x === "string") {
    x.toUpperCase();
  }
}
