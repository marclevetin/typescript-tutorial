interface IPerson {
    name: string;
    city: string;
    age: number;
    printDetails(): string; // use void if the function returns nothing
    anotherFunc(a: number, b: number): number;
}

const tom: IPerson = {
    name: "Tom",
    city: 'Munich',
    age: 33,
    printDetails: function() {
        return `${this.name} - ${this.city}`;
    }
};