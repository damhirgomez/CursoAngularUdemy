function classDecorator(constructor: any) {
	return class extends constructor {
		newProperty = "new property";
		hello = "override";
	};
}

@classDecorator
class SuperClass {
	public myProperty: string = "Damhir";
	print() {
		console.log(this.myProperty);
	}
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
