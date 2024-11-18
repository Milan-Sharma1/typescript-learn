const data1: string[] = ["a", "b", "c"];
const data2: number[] = [1, 2, 3, 4];
//it will store only string or number in the arrray not both at one time
const data3: string[] | number[] = ["a"];
//it will store both stirng and number at one time
const data4: (string | number)[] = ["a", 2];
