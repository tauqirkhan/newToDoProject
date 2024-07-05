import { createTask } from "./utils/createTask";
import { createTaskDom } from "../dom/createTaskDom";

const homeDiv = document.querySelector('.home');

const home = (function(){
    const homeTaskArr = [];

    //cache DOM
    const allSidebarContentDiv = document.querySelector('.allSidebarContentDiv');
    const addBtn = document.querySelector('#addBtn');
    const cancelFormBtn = document.querySelector('#cancelFormBtn');
    const dialog = document.querySelector('#contentDialog');
    const form = document.querySelector('#contentForm');
    const formTitle = document.querySelector('#title');
    const formDescription = document.querySelector('#description');
    const formPriority = document.querySelector('#priority');
    const formDeadline = document.querySelector('#dueDate');

    //bind events
    form.addEventListener('submit', addTask);
    addBtn.addEventListener('click', openForm);
    cancelFormBtn.addEventListener('click', closeForm);
    dialog.addEventListener('click', closeModal);

    // _render();

    function render(){
        allSidebarContentDiv.innerHTML = '';
        homeTaskArr.forEach((task) => {
            createTaskDom(  task.getId(),
                            task.getTitle(),
                            task.getDescription(),
                            task.getDueDate(),
                            task.getPriority(),
                            task.getStatus()
            );
        });
    }

    function openForm(){
        dialog.showModal();
    }

    function closeForm(){
        dialog.close();
    }

    function addTask(event){
        event.preventDefault();
        homeTaskArr.push(
            createTask(
                formTitle.value,
                formDescription.value,
                formDeadline.value,
                formPriority.value
            )
        );
        form.reset();
        closeForm();
        render();
    }

    function closeModal(e){
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          closeForm();
        }
    }

    const getHomeTaskArr = () =>  homeTaskArr; 
    const addTaskToHomeTaskArr = (newTask) => homeTaskArr.push(newTask);

    return{
        render,
        getHomeTaskArr,
        addTaskToHomeTaskArr
    }

})();

export { home, homeDiv };