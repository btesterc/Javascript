
const shoppingList = document.querySelector(".shopping-list");
const shopppingForm = document.querySelector(".shopping-form");
loadItems();
shopppingForm.addEventListener("submit", handleFormSubmit);

function loadItems() {
    const items = [

    ];

    shoppingList.innerHTML = "";

    for (let item of items) {
        const li = createListItem(item);
        shoppingList.appendChild(li);
    }
}

function addItem(input) {
    const id = generateId();
    console.log(id);
    const newItem = createListItem({
        id: id,
        name: input.value,
        completed: false
    })

    shoppingList.prepend(newItem);
    input.value = "";
}

function generateId () {
    return Date.now().toString();
}


function handleFormSubmit(e) {
    e.preventDefault();
    
    const input = document.getElementById("item-name");

    if (input.value.trim().length === 0) {
        alert("yeni değer giriniz");
        return;
    }

    addItem(input);
}


function createListItem (item) {

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = item.completed;

    const div = document.createElement("div");
    div.textContent = item.name;
    div.classList.add = ("item-name");

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";


    const li = document.createElement("li");
    li.className = "border round p-3 mb-1";


    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);

    return li;

}





