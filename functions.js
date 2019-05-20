var sayi1=Math.ceil(Math.random()*20)
var sayi2=Math.ceil(Math.random()*20)
var sayi3=Math.ceil(Math.random()*20)
var sayi4=Math.ceil(Math.random()*20)
var sayi5=Math.ceil(Math.random()*20)
var sayi6=Math.ceil(Math.random()*20)

console.log("Kolon : " + sayi1 + " "+ sayi2 + " "+ sayi3 + " " + sayi4 + " " + sayi5 + " "+ sayi6)

//dont repeat yourself

function sayiUret()
{
   return Math.ceil(Math.random()*30)

}

var sayi7=sayiUret()
console.log(sayi7)


//parametre verdim yani ustlimit dedigim sey 

function sayiUret2(ustLimit)
{
   return Math.ceil(Math.random()*ustLimit)

}

var sayi7=sayiUret2(20)
console.log(sayi7)

//default deger de tanimlayabiliriz paramtre kisminda.






