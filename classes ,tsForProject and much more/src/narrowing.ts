function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}
function provideID(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
//   We wrapped the entire body of the function in a truthy check, but this has a subtle
// downside: we may no longer be handling the empty string case correctly.

// TypeScript doesn’t hurt us here at all, but this behavior is worth noting if you’re less
// familiar with JavaScript. TypeScript can often help you catch bugs early on, but if you
// choose to do nothing with a value, there’s only so much that it can do without being overly
// prescriptive. If you want, you can make sure you handle situations like these with a linter.

// One last word on narrowing by truthiness is that Boolean negations with ! filter out from negated branches.

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

//"IN" operator

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}
function isAdminAccount(account: User | Admin) {
  //"in" verifies that which interface type is account
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//instanceof Narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//   Using type predicates
type Fish = { swim(): void };
type Bird = { Fly(): void };
//if we return the type then it is gurantee that we are getting fish
function isFish(val: Fish | Bird): val is Fish {
  return (val as Fish).swim !== undefined;
}
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; //typescript knows that here it is Fish
    return "Fish Food";
  } else {
    pet; //here it is gurantee that it is bird
    return "Bird Food";
  }
}
