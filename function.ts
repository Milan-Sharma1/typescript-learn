//this will define that function is also returing number only
function addTwo(num: number): number {
  return num + 2;
}
addTwo(5);
//for error handling we use never return type
function showError(error: string): never {
  throw new Error(error);
}
export {};
