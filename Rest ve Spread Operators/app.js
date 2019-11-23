// ... operatoru
//spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); //1,2,3,4

//bir objeyi de kopyalayabiliyoruz, harika bir şeymiş :D

const person = {
    name: 'Merve'
};

const newPerson = {
    ...person,
    age: 23
};

console.log(newPerson);

//rest 

const filter = (...args) => {
    return args.filter(x => x === 2); // x öyle ki, x  2 olanı filtrele
}
console.log(filter(1, 2, 3));

