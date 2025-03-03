// commenting out name and year from Vehicle also works. ts only checkes if the vehicle (L.17) contains summary() returning a string
// when there's only summary()in Vehicle, the name Vehicle doesn't make sense anymore. updated version is in code2.ts 

interface Vehicle {
	// name: string;
	// year: Date;
	summary(): string;
}

const oldCivic1 = {
	name: 'civic',
  year: new Date(),
  summary(): string {
	  return `Name: ${this.name}`;
  }
}

const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary() + ' - var 1');
}

printVehicle(oldCivic1);
