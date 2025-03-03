// interface Reportable is now applied to both very different objects
// generic interface and generic function
// to make the code reusable

interface Reportable {
	summary(): string;
}

const oldCivic2 = {
	name: 'civic',
  year: new Date(),
  summary(): string {
	  return `Name: ${this.name}`;
  }
}

const drink = {
  color: 'brown',
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar}g of sugar.`
  }
}

const printSummary = (item: Reportable): void => {
	console.log(item.summary() + ' - var 2');
}

printSummary(oldCivic2);
printSummary(drink);
