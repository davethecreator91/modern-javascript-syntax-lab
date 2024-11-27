
// Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Array.map(callback(currentValue, index, array), thisArg)

const newArray = nums.map((element) => {
  return element * 2;
});

// const newArray = nums.map((element) => {
//     return element * 2;
// });
// console.log(newArray);

const petsArray = ["Rover", "Snuffles", "Toto", "Spot"];

const [adopted, found] = petsArray;

// console.log(adopted);
// console.log(found);
// console.log(petsArray);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// Exercise 2 
const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

const [freeTopping, Extra] = pizzaToppings;

// console.log(freeTopping);
// console.log(Extra);

const person = {
  name: "Alex",
  role: "Software Engineer",
};
// Your code here
//object destructuring
const { name, role } = person;

// console.log(name);
// console.log(role);

//Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: "Audi",
    model: "q5",
  };

  //Exercise 4
  const controversialPizzaToppings = [...pizzaToppings];
  console.log(controversialPizzaToppings);
  
// Exercise 5
// Your code here
const { make, model } = car;

//   console.log(make);
//   console.log(model);
const myCar = { ...car };
myCar.model = "q7";

// console.log(myCar);
// console.log(car);


const originalObject = {
  foo: "Hello",
  bar: 100,
};

const newObject = { ...originalObject };

console.log(newObject);

const fruitInventory = {
  apples: 2,
  oranges: 4,
};

const selectedFruit = "apples"; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

// console.log(selectedFruitCount); 

const fruitStand = {
  [selectedFruit]: 5,
};

console.log(fruitStand);


// Exercise 6
let userProfile = {

}

let propertyName = "email";

userProfile = {
    [propertyName]:"Jake@yahoo.com",
}

console.log(userProfile);

// Exercise 7 on importingFile.js


//Exercise 8
function catFunc(noun = 'cat', adjective = 'white') {
    return `The ${noun} is ${adjective}`
    }
    //Exercise 9
    let pizza = 'tasty';
    
    let Dominos = pizza ? 'tasty':'Yuck';
    const myVar = 5;
    console.log(Dominos);
    
    const result1 = 'bar' && 'foo';
    const result2 = false || 243;
    const result3 = 42 && false;
    const result4 = myVar || 3000;
    
    // console.log('result1:', result1);
    // console.log('result2:', result2);
    // console.log('result3:', result3);
    // console.log('result4:', result4);
    
    //Exercise 10
    // 1. SET LANGUAGE
    
    // Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 
    
    // "LANG is equal to localLangConfig or the default value of English."
    
    const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
    
    // a. Create a variable called LANG
    // b. Assign LANG the value of localLangConfig or 'en' as a default
    
    let LANG = localLangConfig || 'en';
    
    // Your code here
    
    // Log the result
    console.log('Language setting:', LANG);
    
    // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
    
    //Exercise 11
    const adventurer = {
        name: 'Alice',
      };
      
      let cat = adventurer.cat?.age; // Your code here
      
      console.log(adventurer.cat?.age);
    
      