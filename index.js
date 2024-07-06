const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name)
{
    cats.push(`Ralph`);
    return name;
}

//const cats = ["Milo", "Otis", "Garfield"]
function destructivelyPrependCat(name)
{
    cats.unshift(`Bob`);
    return name;
}
//console.log(destructivelyPrependCat(`Bob`));
//console.log(cats);
function destructivelyRemoveLastCat(name)
{
    cats.pop(name);
    return name;
}
function destructivelyRemoveFirstCat(name)
{
    cats.shift(name);
    return name;
}


function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(name) {
    const newCats = [...cats]
    newCats.pop();
    return newCats;
}

function removeFirstCat(name) {
    const newCats = [...cats]
    newCats.shift();
    return newCats;
}
