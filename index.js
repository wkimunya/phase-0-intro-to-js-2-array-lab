// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

var Cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
}
 
var Cats = ["Milo", "Otis", "Garfield"]
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
}

var Cats = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}

var Cats = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats 
}

var Cats = ["Milo", "Otis", "Garfield"]
const copyOfCats = [...cats];
function appendCat(Broom) {
    const allcats = [...cats, "Broom"]
    return allcats
}

var Cats = ["Milo", "Otis", "Garfield"]
function prependCat(Arnold) {
    const allcats= [Arnold, ...cats]
    return allcats
}

var Cats = ["Milo", "Otis", "Garfield"]
function removeLastCat () {
   var caats = cats.slice(0,cats.length-1);
    return caats;
}

var Cats = ["Milo", "Otis", "Garfield"]
function removeFirstCat() {
    var catts = cats.slice(1)
    return catts
}