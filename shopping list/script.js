
const shoppingList = document.querySelector(".shopping-list")



function loadItems() {
    const items = [
        {id:1, name: "Eggs", completed: false},
        {id:2, name: "Fish", completed: true},
        {id:3, name: "Milk", completed: false},
        {id:4, name: "Olive", completed: true}
    ];

    shoppingList.innerHTML = "";

    for (let item of items) {
        const li = createListItem(item);
        shoppingList.appendChild(li);
    }
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

loadItems();




