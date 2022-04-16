
function startTodo() {

    
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
