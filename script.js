'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// WHAT ON EARTH IS A MAP EVEN?

// it is a data structure that we can use to map objects to keys
// in maps the keys can have any type--different from object where keys is only string
// this is some advanced stuff - fancy keys

const rest = new Map();
rest.set('name', 'Classico Italiano')
// you just added a new element to the data structure
rest.set(1, 'Firenze Italy')
// look at the key being a number
// CALLING THE SET METHOD NOT ONLY SETS ITEM BUT IT RETURNS THE MAP
console.log(rest.set(2, 'Lisbon, Portugal'))

// since set also RETURNS the map--you can chain set methods to add more stuff at once

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23);

// you can even use booleans to the key
rest.set(true, 'We are open!');
rest.set(false, 'We are closed!')

// to get a value from a map use the GET method on the KEY
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(2));

//something fun but not very readable
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// HOW TO CHECK IF MAP CONTAINS KEY
console.log(rest.has('categories'));

// how to delete items
rest.delete(2);
console.log(rest)

// the size property
console.log(rest.size);

// remove all elements from map
// rest.clear(rest)

// ARRAYS OR OBJECTS CAN BE KEYS OF MAPS

rest.set ([1,2], 'Test')

// these 2 arrays here are 2 different values in the heap - you have to use naming to get them the same
console.log(rest.get([1,2]))

const array = [1,2];
// you can even do this advanced move
rest.set(document.querySelector('h1'), 'Heading');
rest.set(array, 'Test');
console.log(rest.get(array));
// Now it refers to same element in heap memory


// --- MAP ITTERATION ---
// how to populate a map without using the set method

// array inside of arrays
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 😃'],
    [false, 'Try again ⛔️'],
])
console.log(question)

// this is very similar to printing out Object.entries(openingHours)

console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours))
console.log(hoursMap);

// how to loop MAPS

console.log(question.get('question'))
for(const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = Number(prompt(`Your answer: `))
console.log(answer);

// console.log(question.get(question.get('correct') === answer ));

// convert map to array

//entries exist, keys and values
console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])

