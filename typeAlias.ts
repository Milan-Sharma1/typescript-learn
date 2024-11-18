//making custom types
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function create({ User }) {
  return "";
}

function createtwo({ name, email, isActive }: User): string {
  // Perform any logic with the destructured values
  return `User ${name} with email ${email} is ${
    isActive ? "active" : "inactive"
  }.`;
}

export {};
