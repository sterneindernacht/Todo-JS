const todos = [
    {
        name: "Test",
        isDone: false
    },
    {
        name: "Test12313",
        isDone: true
    }
];

const todoListContainer = document.querySelector('.todo-list');

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

    todoListContainer.innerHTML = htmlForUndone;
}

render();
