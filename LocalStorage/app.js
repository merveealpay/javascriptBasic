//SetItem

// localStorage.setItem("merve", "female");
// localStorage.setItem("mervecik", 23);

// //GetItem

// const value = localStorage.getItem("mervecik");
// console.log(value);

// //application-local storage'da 23 degerini gorduk

// localStorage.setItem("gogogo",82);
// localStorage.setItem("BJK",1903);

// if (localStorage.getItem("BJK" === null))
//     console.log("Sorguladıgınız veri bulunmuyor.")
// else
//     console.log("Sorguladıgınız veri bulunuyor.");

//array yazma JSON ile okuma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// localStorage.setItem("todos", JSON.stringify(todos));
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);
// // console.log(todos);

// todos listesine bir todo eklemek istediğimiz zaman:

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

const addTodo = (event) => {
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    event.preventDefault();
}

form.addEventListener("submit",addTodo);
