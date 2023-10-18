export function whatsMyType<T>(arg: T): T {
	return arg;
}

let amIString = whatsMyType<string>("Hola mundo");
let amINumber = whatsMyType<number>(122);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed(2));
console.log(amIArray.join("-"));
