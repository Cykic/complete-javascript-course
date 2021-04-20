'use strict';
// NO 1
const extract = function (array, ...index) {
  console.log(`++++++++++ NO 1 +++++++++`);
  let result = [];
  for (const vals of index) {
    for (const [i, val] of array.entries()) {
      if (vals === i) {
        console.log(val);
        result.push(val);
      }
    }
  }
  return result;
};
// NO 2
const compareObject = function (obj1, obj2) {
  console.log(`++++++++++ NO 2 +++++++++`);

  const obj1Key = Object.keys(obj1);
  const obj2Key = Object.keys(obj2);
  let len;
  // CHECK LENGTH
  if (obj1Key.length === obj2Key.length) len = obj1Key.length;
  else if (obj1Key.length > obj1Key.length) len = obj1Key.length;
  else len = obj2Key.length;

  for (let i = 0; i < len; i++) {
    if (obj1[obj1Key[i]] === obj2[obj2Key[i]]) {
      console.log(`'${obj1[obj1Key[i]]}'`, 'is present in both Objects');
    }
  }
};
// NO 3
const convert = function (num) {
  console.log(`++++++++++ NO 3 +++++++++`);
  if (typeof num === 'number') {
    const numStr = String(num);
    let arr = [];
    for (const letter of numStr) arr.push(letter);
    console.log(arr);
  } else console.log('Please Enter a Number');
};
// NO 4
const filter = function (array, ...value) {
  console.log(`++++++++++ NO 4 +++++++++`);

  // MULTIPLE ARGUMENT

  let newArray = [];
  for (const [b, vels] of value.entries()) {
    for (const [i, val] of array.entries()) {
      vels === val && array.splice(b, 1);
    }
  }
  console.log(array);
};
// NO 5
const split = function (arr1, arr2) {
  // TAKES IN TWO ARRAY
  console.log(`++++++++++ NO 5 +++++++++`);
  // CONVERT TO SINGLE ARRAY
  const bigArray = [...arr1, ...arr2];
  const truthyArray = [];
  const falsyArray = [];
  // SPLIT TRUTH AND FALSY
  for (const [i, val] of bigArray.entries()) {
    if (val) truthyArray.push(val);
    else falsyArray.push(val);
  }

  console.log(`Truthy Values are`, truthyArray);
  console.log(`Falsy Values are`, falsyArray);
};

// VARIABLES
let testArray = [10, 'Hello', true, undefined, 0, 10, 10, 10];
let testArray1 = [30, 'Hi', false, null, ''];
let str;

const sam = {
  firstName: 'Sam',
  lastName: 'Olayemi',
  age: 16,
  weight: '20kg',
};

const fortune = {
  firstName: 'fortune',
  lastName: 'Olayemi',
  age: 17,
  weight: '20kg',
};

extract(testArray, 0, 4, 2, 3, 1); //can take multiple args
compareObject(sam, fortune);
convert(120025);
filter(testArray,);
split(testArray, testArray1);

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   print() {
//     console.log('hello', this.name);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // CHALLENGE 3
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// const interval = Math.round(90 / gameEvents.size);
// console.log(`An event happened every ${interval} minutes`);
// gameEvents.delete(64);
// for (const [time, event] of gameEvents) {
//   const log =
//     time < 45
//       ? `[First HALF] ${time} : ${event} `
//       : `[Second0 HALF] ${time}:${event} `;
//   console.log(log);
// }

// // CHALLENGE 1
// const [player1, player2] = game.players;
// const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...player1, ...player2];
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;
// const printGoals = function (...player) {
//   console.log(player);
//   console.log(player.length);
// };
// printGoals('James', 'John');
// printGoals(...game.scored);

// team1 > team2 || console.log('Team 1 is more likely to win');
// team1 < team2 || console.log('Team 2 is more likely to win');

// // CHALLENGE 2
// for (const [no, goal] of game.scored.entries())
//   console.log(`Goal ${no + 1}: ${goal}`);

// const odds = Object.values(game.odds);
// console.log(odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [key, values] of Object.entries(game.odds)) {
//   const strng = key === 'x' ? `draw` : `victory ${game[key]}`;
//   console.log(`Odds of ${strng}: ${values}`);
// }

// // BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(Object.keys(scorers));
// // console.log(scorers.Hummels);
// // console.log(Object.values(scorers));

// // CHALLENGE #3
