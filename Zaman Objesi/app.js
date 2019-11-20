let value;

const now = new Date(); //şuanki zaman
console.log(now);

const date1 = new Date("11-5-1996 13:50:00");

const date2 = new Date("November 5 1996");

const date3 = new Date("11/5/1996");

value = date1.getMonth(); // Aylar 0'dan baslıyor Kasım 10. aymıs gibi gozukecek
value = date3.getFullYear();

value = date1.getHours();
value = date1.getMinutes();

//eger date1 in ayını degistirmek istersek:

value = date1.setMonth(8);
value = date1;



console.log(value);