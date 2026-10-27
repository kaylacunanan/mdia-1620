
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

let horses = [juniper, doofy, kiwi]

// BOOLEANS
juniper.isHorseHungry = true;
doofy.isHorseHungry = true;
kiwi.isHorseHungry = false;
chupa.isHorseHungry = true;


// FUNCTIONS //

// --- stalls function ---

function stallsAvailable() {
    let totalStalls = 10
    let horsesInStable = 4
    return totalStalls - horsesInStable;
}
console.log(stallsAvailable())
// 10 - 6 = 4

// --- late fee function ---

function ifFeePaidLate(horse) {
    let lateFee = 2
    console.log(horse.monthlyRent * lateFee)
}
ifFeePaidLate(chupa)
// 50 * 2 = 100

// --- nickname function ---

function horseNickname(horse) {
    return horse.nickname
}
console.log(horseNickname(doofy))
// officer


