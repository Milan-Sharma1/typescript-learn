interface newUser {
  name: string;
  googleId?: number;
  sayhello(): string; //more concise
  // sayHello: () => string;//also correct
}
//reopening of interface, it will also add githubtoken property for user
interface newUser {
  githubToken?: string;
}

interface Admin extends newUser {
  role: "admin" | "user";
}

const milan: newUser = {
  name: "milan",
  sayhello: () => {
    return "hi milan";
  },
};
