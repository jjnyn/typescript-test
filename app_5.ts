//simple generic 
function echo(data:any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

//better generic 
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

//Built-in generic
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-21.99);
console.log(testResults);

//arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

//generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

//generic class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T; //T: number or string
    multiplyValue: U; //U: number or string
    calculate():number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>(); //in this case, T == string; U == number
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());