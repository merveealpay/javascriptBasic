
// fakat ES6 - next generation javascript'te arrow function kullanımı
//ve property = value gibi anlamlandırmalardan dolayı yorum satıına aldım eski versiyonu, daha güzel yazabiliriz.


class Human {
    // constructor() {
    //     this.gender = 'male';
    // }

    gender = 'male'; 

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    // constructor() {
    //     super(); //implemente etmek için
    //     this.name = 'merve';
    //     this.gender ='female';
    // }

    name = 'merve';
    gender = 'female';

    // printMyName() {
    //     console.log(this.name);
    // }

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person(); // person objesi oluşturduk

person.printGender();
person.printMyName();

//bu class mantığını react'te component oluştururken karşılaşacağız


