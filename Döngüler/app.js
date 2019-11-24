//while

let i = 0;

while(i < 10) {
    
    console.log(i);

    i++;
}
//0 1 2 3 4 5 6 7 8 9


//break ve continue

//break: döngüyü kırıyor direkt

let m = 0;

while( m < 10) {

    console.log(m);

    if(m == 5)
        break; // m 5 oldugunda döngüyü sonlandırıyor ve 5 e kadar yazdırıyor

    m++;    
}

//continue : döngüyü devam ettiriyor

let x = 0;

while(x < 10) {

    if(x == 3 || x == 5) {
        x++; // eger bunu buraya koymasaydık,sonsuz dongu olacaktı
        continue; // 3 ve 5 i yazdırmadan atlattı
    }
    console.log(x);
    x++;
} // 0 1 2 4 6 7 8 9


//for

const langs = ["Python", "Java", "Go"];

for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);    
}
//Python Java Go

//index i ile birlikte yazdırmak için: 

langs.forEach(function(lang,index) {
    console.log(lang,index);
})
// Python 0 Java 1 Go 2

//map ile örnek


const  users = [
    {name:"Merve", age:23},
    {name:"Kumsal", age:10},
    {name:"Dalga", age:30}
];

const names = users.map(function(users){
    return users.name;
})

console.log(names);

const ages = users.map(function(users) {
    return users.age;
})

console.log(ages);

// for in döngüsü

const user = {
    name:"Merve Alpay", //user objesi olusturduk ve name,age property yani key
    age:"23"
};

for (const key in user) {
    console.log(key,user[key]); // user ın her bir key'ini sahip oldugu key degerine karsılık gelen degeriyle birlikte yazdırıyor
}


