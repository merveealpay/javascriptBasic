//arrow functions

const printMe = (name,age) => { 
    console.log(name,age);
  }
  printMe('Merve',23);

//fonksiyonun bloğu tek işlem ise  onu tek satırda yazabiliriz:

const multiply = (number) => number * 2;

console.log(multiply(5)); //10


//important

// //When having no arguments, you have to use empty parentheses in the function declaration:

// const callMe = () => { 
//     console.log('Max!');
// }
// //When having exactly one argument, you may omit the parentheses:

// const callMe = name => { 
//     console.log(name);
// }
// //When just returning a value, you can use the following shortcut:

// const returnMe = name => name
// //That's equal to:

// const returnMe = name => { 
//     return name;
// }


//map

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  return num*2;
});

console.log(numbers);
console.log(doubleNumArray); //2,4,6


//map

const array1 = [1, 4, 6, 9];

const map1 = array1.map(x => x*2);

console.log(map1); //2,8,12,18

//find

const array2 = [2, 8, 10, 25, 12];

const found = array2.find(x => x>8);

console.log(found); // 10.
//find, koşulun sağlandıgı ilk elementi döndü

//findIndex


const ısLargeNumber = array2.findIndex(x => x>8);

console.log(ısLargeNumber); //kosulugun saglandıgı sayı 10, indeksi 2

//filter

const words = ["merve", "kumsal", "deniz", "güneş", "izmirbodrum"];

const result = words.filter(x => x.length > 6);
console.log(result);

//reduce, aslında bu fonksiyon baya kullanımı ozellıgı varmıs arastırınca gordum
//kısa bir örnek yapacagım sadece, kümülatif ilerlemek icin aslında var

let data = [2, 5, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//2+5+10=17

console.log(data.reduce(reducer)); //17

console.log(data.reduce(reducer,8)); //25





























