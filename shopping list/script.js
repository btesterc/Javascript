
const shoppingList = document.querySelector(".shopping-list");
const shopppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");


document.addEventListener("DOMContentLoaded", function (){
    loadItems();
    shopppingForm.addEventListener("submit", handleFormSubmit); 

    for (let button of filterButtons){
        button.addEventListener("click", handleFilterSelection);
    }
})



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

function toggleCompleted (e) {
    const li = e.target.parentElement;
    li.toggleAttribute("item-completed", e.target.checked)
}


function createListItem (item) {

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = item.completed;
    input.addEventListener("change", toggleCompleted);


    const div = document.createElement("div");
    div.textContent = item.name;
    div.className = "item-name";
    div.addEventListener("click", openEditMode);
    div.addEventListener("blur", closeEditMode);
    div.addEventListener("keydown", cancelEnter)


    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.addEventListener("click", removeItem);



    const li = document.createElement("li");
    li.className = "border round p-2 mb-1";
    li.toggleAttribute("item-completed", item.completed);


    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);

    return li;

}

function removeItem (e) {
    const li = e.target.parentElement;
    shoppingList.removeChild(li);
}

function openEditMode(e){
    const li = e.target.parentElement;
    if(li.hasAttribute("item-completed") == false){
        e.target.contentEditable = true;
    }
}

function closeEditMode(e){
     e.target.contentEditable = false;
}

function cancelEnter (e) {
    if (e.key == "Enter"){
        e.preventDefault();
        closeEditMode(e)
    }
}

function handleFilterSelection(e) {
    const filterBtn = e.target;

    for(let button of filterButtons) {
        button.classList.add("btn-secondary");
        button.classList.remove("btn-primary");
    }
    
    filterBtn.classList.add("btn-primary");
    filterBtn.classList.remove("btn-secondary");
}



