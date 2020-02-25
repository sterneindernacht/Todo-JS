const todos = [
    {
        name: "Test",
        isDone: false
    },
    {
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
            <div>
                <h3>${item.name}</h3>
                <input type="checkbox" ${item.isDone ? 'checked' : ''} />
            </div>
        `)
        .join('');

    const htmlForDone = todos
        .filter(item => item.isDone)
        .map(item => `
             <div>
                <h3>${item.name}</h3>
                <input type="checkbox" ${item.isDone ? 'checked' : ''} />
             </div>
         `)
        .join("");

    todoListContainer.innerHTML = htmlForUndone;
    doneListContainer.innerHTML = htmlForDone;
}

addingButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (taskInput.value !== "") {
        todos.push({
            name: taskInput.value,
            isDone: false
        });
        taskInput.value = "";
        render();
    }

});

render();