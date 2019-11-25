const todoForm = document.getElementById("todo-form");
//todo elementini seçmemiz lazım öncelikle

//e , event 
// function submitForm(e) {

//     console.log("submit edildi");


//     e.preventDefault(); //sayfa yenilenmesin default ayarları engellledik
// }


// arrow hali:
const submitForm = (e) => {
    console.log("submit edildi");
    e.preventDefault();
};

todoForm.addEventListener("submit",submitForm);


//load sayfa yuklendi

const filter = document.getElementById("filter");

const load = (e) => {
    console.log("Sayfa yüklendiii");
};

document.addEventListener("DOMContentLoaded",load);


