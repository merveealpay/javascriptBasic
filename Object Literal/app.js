let value;


const programmer ={
    name : "Merve",
    age : 23,
    langs : ["Go","Java"],

    //obje içinde obje tanımlayabiliriz.

    address : {
        city: "İstanbul",
        street : "Bağcılar"
    },
    //obje içinde fonksiyon tanımlayabiliriz

    work : function(){
        console.log("Programcı çalışıyor..");
    }

}

value = programmer;

//obje içinden ozellik almak
value = programmer.age;

value = programmer.address.city;

programmer.work();

// objelerden oluşan obje

const programmers = [
    {name: "Merve Alpay", age:23},
    {name: "Kumsal", age:10}

]

value = programmers[0].name;

console.log(value);