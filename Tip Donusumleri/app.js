let value;

//veritiplerini string ' e çevirme

value = 13;
console.log(value);

value = String(13);
console.log(typeof value);

value = (3.14).toString();

// veritiplerini sayılara çevirme

value = Number("1234");
console.log(typeof value);

value = Number([1,2,3]);
console.log(typeof value);

const a = "Hello" + 35; // bir veri string oldugu icin 35 i de string olarak aldı
console.log(a);
console.log(typeof a);

