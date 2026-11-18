
//------------------------- First day (Assignment 2) -------------------------//

// OBJECTS //

let juniper = {
    name: "juniper",
    nickname: "juni",
    age: 2,
    favouriteTreat: "tuna" , 
    monthlyRent: 350,
    isHorseInside: true,
    favouriteDrink: "milk",
    favouritePerson: "ivan",
    isHorseHungry: true,
 }

 let doofy = {
    name: "doofy",
    nickname: "officer",
    age: 5,
    favouriteTreat: "tofu",
    monthlyRent: 10, 
    isHorseInside: false,
    favouriteDrink: "kombucha",
    favouritePerson: "anezka",
 }

let kiwi = {
    name: "kiwi",
    nickname: "weewee",
    age: 12,
    favouriteTreat: "peaches",
    monthlyRent: 800,
    isHorseInside: true,
    favouriteDrink: "gingerale",
    favouritePerson: "kayla",
}

let chupa = {
    name: "chupa",
    nickname: "chuchu",
    age: 1,
    favouriteTreat: "chips",
    monthlyRent: 50,
    isHorseInside: true,
    favouriteDrink: "tea",
    favouritePerson: "kayla",
}

// ARRAYS //
// Store the horses you've just created in a "horses" array.

let horses = [juniper, doofy, kiwi, chupa]

// BOOLEANS
//Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

juniper.isHorseHungry = true;
doofy.isHorseHungry = true;
kiwi.isHorseHungry = false;
chupa.isHorseHungry = true;


// FUNCTIONS //
// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

let totalStalls = 10;

function stallsAvailable(numberOfStalls, horsesInStable) {
    console.log(numberOfStalls - horsesInStable);
}
stallsAvailable (totalStalls, horses.length)
// 10 - 6 = 4

// --- late fee function ---

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function ifFeePaidLate(horse) {
    let lateFee = 2
    console.log(horse.monthlyRent * lateFee)
}
ifFeePaidLate(chupa)
// 50 * 2 = 100

// --- nickname function ---

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function horseNickname(horse) {
    return horse.nickname
}
console.log(horseNickname(doofy))
// officer



//------------------------- Day to day operations (Project) -------------------------//


// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

for (const horse of horses) {

    if (horse.favouriteTreat != "chips"){

console.log(horse.name + " does not like this treat!");
}

else {
    break;
}
}

// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

function checkFavPerson(horse) {

    if (horse.favouritePerson == "kayla") {

console.log(horse.name + " loves the best person ever!")
    }
}

for (const horse of horses) {
    checkFavPerson(horse);
}

// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun. 
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

function moveOutside(horses) {
    for (const horse of horses) {

    if (horse.isHorseInside == true) {
        horse.isHorseInside = false
     console.log(horse.name + " is now outside enjoying the sun! ")
    }
   }
}
 moveOutside(horses)

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of the horses.

 function feedHorse(horses) {
    for (const horse of horses) {
    if (horse.isHorseInside != true) {
        horse.isHorseInside = true
        console.log(horse.name + ", come back inside!")
    }
    console.log(horse.name + " is fed some " + horse.favouriteTreat)
    }
}
feedHorse(horses)

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function moveOutside(horses, bedtime) {
    for (const horse of horses) {

    if (horse.isHorseInside == true && bedtime == false) {
        horse.isHorseInside = false
     console.log(horse.name + " is now outside enjoying the sun! ")
    }

    if (horse.isHorseInside == false && bedtime == true) {
        horse.isHorseInside = true 
               console.log(horse.name + " is inside for bedtime!")
    }
    }
}
moveOutside(horses, true)
