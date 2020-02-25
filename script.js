let todos = [
    {
        id: "1",
        name: "Test",
        isDone: false
    },
    {
        id: "2",
        name: "Test12313",
        isDone: true
    },

];

const todoListContainer = document.querySelector('.todo-list');
const doneListContainer = document.querySelector('.done-tasks');
const addingButton = document.querySelector("#adding-button");
const taskInput = document.querySelector("#taskInput");


function render() {
    const htmlForUndone = todos
        .filter(item => !item.isDone)
        .map(item => `
        <div class="todo-element-bar" data-id="${item.id}">
            <div>
                <h6 id="date"></h6>
            </div>
            <div>
                <input class="all-tasks" type="checkbox" ${item.isDone ? 'checked' : ''} id="done-checkbox">
                <div class="all-tasks" id="tasks-all">${item.name}</div>
                <button class="all-tasks button-delete" title="delete task">
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
            <div>
                <input class="all-tasks" type="checkbox" ${item.isDone ? 'checked' : ''} id="done-checkbox">
                <div class="all-tasks" id="tasks-all">${item.name}</div>
                <button class="all-tasks button-delete" title="delete task">
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



render();