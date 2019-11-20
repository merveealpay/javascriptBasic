let value;

const numbers = [1,2,3,4,5];

const langs = ["Java", "Python", "C++"];

const a = ["Merhaba", 22, undefined,null,3.14];

value = numbers[0];
//uzunluk
value = numbers.length;

value = numbers[numbers.length-1];

//herhangi bir indeksteki yeri değiştirme

numbers[2] = 10;
value = numbers;

//ındex of

value = numbers.indexOf(2);

//dizinin sonuna deger ekleme

numbers.push(30);
value = numbers;

// dizinin başına deger ekleme

numbers.unshift(45);
value = numbers;

//dizinin sonundan eleman çıkartmak

numbers.pop(30);
value = numbers;

//dizinin başından eleman atmak için

numbers.shift(45);
value = numbers;

//dizinin belli bir kısmını atmak için mesela 0,1,2. indeksleri atmak

numbers.splice(0,3);
value = numbers;

//diziyi ters çevirmek

numbers.reverse();
value = numbers;

//

console.log(value);