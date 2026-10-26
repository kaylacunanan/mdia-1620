
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
    isHorseHungry: false,
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
    isHorseHungry: false,
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
    isHorseHungry: true,
}

// ARRAYS //

let horses = [juniper, doofy, kiwi]

// BOOLEANS

if (chupa.isHorseHungry) {
    console.log("I'm hungry neigghhhh");
}

// FUNCTIONS //

// --- stalls function ---

let totalStalls = 10

function stallsAvailable(horsesInStable) {
    return totalStalls - horsesInStable;
}

console.log(stallsAvailable(4))
// 10 - 6 = 4

// --- late fee function ---

function lateFee(horse) {
    console.log(horse.monthlyRent * 2)
}
lateFee(chupa)
// 50 * 2 = 100

// --- nickname function ---

function horseNickname(horse) {
    return horse.nickname
}
console.log(horseNickname(doofy))
// officer


