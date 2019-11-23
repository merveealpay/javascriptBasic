//easily extract array elements or object properties and store them in variables

//arrray destructuring

[a,b] = ['Hello', 'Merve']
console.log(a); // Hello
console.log(b); // Merve

const numbers = [1, 2, 3];
[num1, ,num3] = numbers; // boşluğa dikkat
console.log(num1, num3);

//object destructuring

const {name} = {name:'Merve', age: 23}
console.log(name) //Merve
//console.log(age) //undefined

const person = {
    name: 'Merve'
};
const secondPerson = {
    ...person //person ın pointer ı kopyalandı aslında, person ın value'su değişse bile bu değişmez
};

person.name = 'kumsal'; 
console.log(secondPerson); //merve göreceğiz 

//immutable özelliği
