//key value degerleri

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//inputlar

const addkey = document.querySelector("#addkey");
const deletekey = document.querySelector("#deletekey");
const addvalue = document.querySelector("#addvalue");

//eventler ı dinle
//arrow function ile
const addItem = (event) => {
    sessionStorage.setItem(addkey.value, addvalue.value);
};

const deleteItem = (event) => {
    sessionStorage.removeItem(deletekey.value);
};


const clearItem = (event) => {
    sessionStorage.clear();
}

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);


// function addItem(event) {
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }

// function deleteItem(event) {
//     sessionStorage.removeItem(deletekey.value);
// }

// function clearItem(event) {
//     sessionStorage.clear();
// }



