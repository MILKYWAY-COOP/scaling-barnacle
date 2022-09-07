let number = 1;
let my_name = 'John';

function sucker(document: any) {
  console.log(document);
}

let my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let empty_array: boolean[] = [];
empty_array[0] = true;
// empty_array[1] = 1;

my_array.forEach((element) => {
  element.toPrecision(2);
});

let user: [string, number] = ['John', 1];
user[1].toString();

user.push(1);

//Enums
const enum Color {
  Red,
  Green,
  Blue = 'Blue'
}

//functions
function calculateTax(income: number, taxYear: number): number {
  if (taxYear <= 1000) {
    return income * 1.2;
  }
  return income * 1.4;
}

//create an object
let person: {
  name: string;
  age: number;
  isMarried: boolean;
  children: string[];
} = {
  name: 'John',
  age: 30,
  isMarried: false,
  children: ['Mary', 'Bob']
};
