"use strict";
var link1 = {
    description: "Typescript tutotial for beginners is a tutorial for all the Javascript developers ...",
    id: 1,
    url: 'www.valentinog.com/typescript',
    language: 'en'
};
var obj1 = { url: 'string1' };
var obj2 = { url: 'string2' };
var obj3 = { url: 'string3' };
var arrOfLinks = [obj1, obj2, obj3];
var term = 'java';
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = 'url'; }
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("inputArr cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex).toString();
    });
}
filterByTerm(arrOfLinks, term);
// const paolo = {
//     name: "Paolo",
//     city: 'Siena',
//     age: 44
// };
// const tom = {
//     name: "Tom",
//     city: "Munich",
//     age: 33
// };
// function filterPerson(arr, term, key) {
//     return arr.filter(function(person) {
//       return person[key].match(term);
//     });
// }
// filterPerson([paolo, tom], "Siena", "city");
