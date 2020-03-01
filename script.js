let todos = [];

const todoListContainer = document.querySelector('.todo-list');
const doneListContainer = document.querySelector('.done-tasks');
const addingButton = document.querySelector("#adding-button");
const taskInput = document.querySelector("#taskInput");
const todoSearch = document.querySelector("#todoSearch");


function render() {
    const htmlForUndone = todos
        .filter(item => !item.isDone)
        .map(item => `
        <div class="todo-element-bar" data-id="${item.id}">
            <div>
                <h6 id="date"></h6>
            </div>
            <div class="contentTODO">
                <input class="all-tasks" type="checkbox" ${item.isDone ? 'checked' : ''} id="done-checkbox">
                <div class="all-tasks" id="tasks-all">${item.name}</div>
                <button id="deleteButton" class="all-tasks button-delete" title="delete task">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        `)
        .join('');

    const htmlForDone = todos
        .filter(item => item.isDone)
        .map(item => `
        <div class="todo-element-bar" data-id="${item.id}">
            <div>
                <h6 id="date"></h6>
            </div>
            <div class="contentTODO">
                <input class="all-tasks" type="checkbox" ${item.isDone ? 'checked' : ''} id="done-checkbox">
                <div class="all-tasks" id="tasks-all">${item.name}</div>
                <button id="deleteButton" class="all-tasks button-delete" title="delete task">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
         `)
        .join("");

    todoListContainer.innerHTML = htmlForUndone;
    doneListContainer.innerHTML = htmlForDone;

    document.querySelectorAll('.button-delete').forEach(node => {
        node.addEventListener("click", function (e) {
            e.preventDefault();
            const idToRemove = this.closest(".todo-element-bar").getAttribute("data-id");
            todos = todos.filter(item => item.id !== idToRemove);
            render();
        });
    });

    document.querySelectorAll("#done-checkbox").forEach(node => {
        node.addEventListener("click", function (e) {
            e.preventDefault();
            const idToDoneList = this.closest(".todo-element-bar").getAttribute("data-id");
            const index = todos.findIndex(x => x.id === idToDoneList);
            todos[index].isDone = !todos[index].isDone;
            render();
        });


    });
}

addingButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (taskInput.value !== "") {
        todos.push({
            name: taskInput.value,
            isDone: false,
            id: String(Math.random())
        });
        taskInput.value = "";
        render();
    }

});

todoSearch.addEventListener("input", function (e) {
    const valueText = this.value;
    const allElements = todoList.querySelectorAll(".todo-element-bar");

    allElements.forEach(element => {
        const text = element.querySelector("#tasks-all").innerText;

        if (text.indexOf(valueText) !== -1) {
            element.style.setProperty("display", "");

        } else {
            element.style.setProperty("display", "none");
        }

    });

});

render();