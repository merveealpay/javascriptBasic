//console.log(window);

//alert("Merhaba");

// const cevap = confirm("Emin misiniz?");

// console.log(cevap);

// if(confirm("Emin misiniz?")) 
//     console.log("Silebilirsiniz");

// else
//     console.log("Silmeyin");


//kullanıcıdan input alalım


// const cevap = prompt("2 + 2 = ?");

// if(cevap == "4")
//     console.log("Doğru!");
// else
//     console.log("Yanlış!");



let value;

value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

console.log(value);

if(confirm("Sayfa yenilensin mi?")) // eger kullanıcı OK derse
    window.location.reload(); //sayfa yenileme fonksiyonu
else // kullanıcı Cancel ederse
    console.log("Sayfa yenilenmedi");

