export class Person {
	constructor(
		public firstName: string,
		public lastName: string,
		public address?: string
	) {}
}

export class Hero {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string,
		public person: Person
	) {}
}
const tony = new Person("Tony", "Stark", "New York");

const ironman = new Hero("IronMan", 45, "Tony Stark", tony);

console.log(ironman);
