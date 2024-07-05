function createTaskDom(id, title, description, dueDate, priority, status = true){
    const parentEl = document.querySelector('.allSidebarContentDiv');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    parentEl.appendChild(taskDiv);

    const checkBoxDiv = document.createElement('div');
    checkBoxDiv.classList.add('checkBoxDiv');
    taskDiv.appendChild(checkBoxDiv);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = status;
    checkBoxDiv.appendChild(input);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = title;
    checkBoxDiv.appendChild(label);

    const detailDiv = document.createElement('div');
    detailDiv.classList.add('detailDiv');
    detailDiv.textContent = 'DETAILS';
    taskDiv.appendChild(detailDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('dueDateDiv');
    dueDateDiv.textContent = dueDate;
    taskDiv.appendChild(dueDateDiv);

    const ellipsisMenu = document.createElement('div');
    ellipsisMenu.classList.add('ellipsisMenu');
    ellipsisMenu.textContent = '⋮';
    taskDiv.appendChild(ellipsisMenu);
}



export { createTaskDom };