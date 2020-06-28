interface Link {
    description?: string;
    id?: number;
    url: string;
    [index: string]: any;
}

interface TranslatedLink extends Link {
    language: string;
}

const link1: TranslatedLink = {
    description: "Typescript tutotial for beginners is a tutorial for all the Javascript developers ...",
    id: 1,
    url: 'www.valentinog.com/typescript',
    language: 'en'
};

const obj1: Link = {url: 'string1'};
const obj2: Link = {url: 'string2'};
const obj3: Link = {url: 'string3'};

const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

const term: string = 'java';

function filterByTerm(
    input: Array<Link>, 
    searchTerm: string,
    lookupKey: string = 'url'
) : Array<Link> {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("inputArr cannot be empty");

    const regex = new RegExp(searchTerm, "i");

    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
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
  