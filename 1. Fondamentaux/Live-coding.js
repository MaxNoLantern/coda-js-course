//Les tableaux

console.log("---------------------");

const tab = [1, 2, 3];
console.log(tab);
tab.push(4);
console.log(tab);
tab.unshift(0);
console.log(tab);

console.log("---------------------");

const val = tab.pop();
console.log(val);
console.log(tab);

console.log("---------------------");

const val2 = tab.shift();
console.log(val2);
console.log(tab);

console.log("---------------------");

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

console.log("---------------------");

for (const el of tab) {
    console.log(el);
}

console.log("---------------------");

for (const index in tab) {
    console.log(index);
}

console.log("---------------------");

const mapFunc = (el) => el * 2;

console.log(tab.map((n) => n * 2));
const result = tab.map(mapFunc);
console.log(result);

console.log("---------------------");

const newTab = [];
for (const el of tab) {
    newTab.push(mapFunc(el));
}
console.log(newTab);

console.log("---------------------");

const impair = tab.filter((el) => el % 2);
console.log(impair);

console.log("---------------------");

const superTab = [
    [10, 11, 12],
    [13, 14, 15],
];
const resultFlat = superTab.flat();
console.log(resultFlat);

console.log("---------------------");

// Reduce utile si l'on veux meler map et filter

const resultReduce = tab.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(resultReduce);

console.log("---------------------");


function getHorodatage(){
    const date = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconde = now.getSeconds();

    return [hour, minute, seconde];
}

const resultHorodatage = getHorodatage();
//const [hour, minute, seconde] = getHorodatage();
//console.log(hour, minute, seconde);

const [hour, ...rest] = getHorodatage();
console.log(rest);

console.log("---------------------");

const copyTab = [... Tab];
copyTab.push(4);
console.log(Tab);
console.log(copyTab);

const grosTab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const firstPart =  grosTab.slice(0,8);
console.log(firstPart);
const lastPart =  grosTab.slice(8);
console.log(lastPart);
console.log(...firstPart, 9, ...lastPart);







//Object plat

//Person 1
const person = {
    firstName: "Maxime",
    adress: {
        primary: "1 rue des fleurs",
        zipCode: "21000",
        city: "Dijon",
    },
};

//Person 2
const person2 = {
    name: "Paldire",
}

//console.log(myObj.name);
//console.log (myObj["name"]);

const tab = [];

tab.lastIndex = 0;

console.log(person2.adress?.city);

person2.adress = {city: "Besançon"};

console.log(person2.adress?.city);


//Spread
const {name, ...rest} = person;
console.log(name);
console.log(rest);

const copy = { ...person};
copy.firstName = "Maxime";

copy.adress.city = "Quetigny";
console.log(person);

//Object.

console.log(Object.keys(person.adress));
console.log(Object.values(person));



const cities = [

]

const cityMap = [];
for (const city of cities) {
    cityMap.zipCode = city;
}
console.log(Object.values(cityMap));


console.log("-----------------------------")

for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}