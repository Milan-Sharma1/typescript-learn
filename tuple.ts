//it makes sure the order of the array is strict
let user: [string, number, boolean];
//correct
user = ["hc", 1, true];
//incorrect
// user = [1,"hc",true]

//use case for rgb
let rgb: [number, number, number] = [255, 123, 112];

//another use case
type User = [number, string];
const newUser: User = [112, "example.com"];
