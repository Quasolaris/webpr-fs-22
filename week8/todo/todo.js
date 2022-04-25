
function startTodo() {

}

let count = 0;
function addTodo() {
    const todoCount = count ++;

    const container = document.getElementById("todoContainer");
    container.innerHTML += `
    <tr>
        <td>
            <label for="todoText${todoCount}">First todo</label>
            <input id="todoText${todoCount}" type="text"></td>
        <td>
            <label for="todoDone${todoCount}">First todo</label>
            <input id="todoDone${todoCount}" type="checkbox"></td>
    </tr>
    `;
    
}

let idCount = 0;
function addTodo() {
    const todoCount = idCount++;

    const container = document.getElementById("todoContainer");
    container.innerHTML += `
    <tr>
        <td>
            <label for="todoText${todoCount}">First ToDo</label>
            <input id="todoText${todoCount}" type="text">
        </td>
        <td>
            <label for="todoDone${todoCount}">First Done</label>
            <input id="todoDone${todoCount}" type="checkbox">
        </td>
    </tr>
    `
}
