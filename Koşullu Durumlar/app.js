console.log(2 == 2); //true
console.log(2 == "2"); //aslında bunun false donmesi lazımdı,biri sayı digeri string
console.log(2 === "2"); // bu şekilde hem tip hem içerik kontrolü oldugu icin false döndü
console.log("js" == "java"); //false

// < , > , <= , >= ,!=

//not 
console.log(!(2 == 2));

//and
console.log("2" == "2" && 2 > 1);

//or
console.log(5>8 || 2>4);

//koşullar

const user = "merve";

if(user === "merve"){
    console.log("Kullanıcı bulundu");
}
else {
    console.log("Kullanıcı bulunamadı");
}
//if'te tek bir islem oldugu icin tek satırda da yazabilirdik


//ternary operator

const number = 100;

console.log(number === 100 ? "SAYI 100" : "SAYI 100 DEGIL");

// switch case

const process = 2;

switch(process){

    case 1:
        console.log("işlem 1");
        break; //switch case den çık 
    case 2:
        console.log("işlem 2");
        break;
    default:
        console.log("geçersiz işlem"); 


}