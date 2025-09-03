// opgave 1 
console.log("Opgave 1");
const sum = (sumArray) => {
    let totalValue = 0

    for (let i in sumArray) {
        totalValue += sumArray[i];
    }
    return totalValue;
}

console.log("Summen af arrayet er: " + sum([1, 2, 3]));
console.log("Summen af det store array er: " + sum([10, 20, 30, 40]));
console.log("------------------")

// Opgave 2
console.log("Opgave 2");
const max = Math.max(...[1, 2, 3]); // Du bruger (...) for at bruge selve elementerne fra arrayet, da Math.max() ikke kan tage et array direkte
console.log("Det højeste tal i arrayet er: " + Math.max(...[1, 2, 3]));

console.log("------------------")

// Opgave 3
console.log("Opgave 3");
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiouyæøåAEIOUYÆØÅ".includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log("Antal vokaler i teksten er: " + countVowels("Åge bøjede syv fine rør ud."));
console.log("------------------")

// Opgave 4
console.log("Opgave 4");
function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("De ulige tal er: " + filterOdd([1, 27, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("------------------")


// Opgave 5
console.log("Opgave 5");

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Den omvendte tekst er: " + reverseString("Javascript."));
console.log("------------------")


//opgave 6
console.log("Opgave 6")
function flattenArray(arr) {
    return arr.flat();
}

console.log("Det flade array er: " + flattenArray([[1, 2], [3, 4], [5]]));
console.log("---------------");


