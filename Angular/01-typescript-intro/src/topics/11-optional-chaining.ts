export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: "Damhir",
};

const passenger2: Passenger = {
	name: "Diana",
	children: ["Andrea", "Diana"],
};

const printChildren = (passenger: Passenger) => {
	const howManyChildren = passenger.children?.length || 0;
	console.log(howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
