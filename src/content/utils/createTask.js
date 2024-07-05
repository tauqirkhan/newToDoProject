import { v4 as uuidv4 } from 'uuid';

function createTask(title, description, dueDate, priority, status){
    const task = {
        id: uuidv4(),
        title,
        description,
        dueDate,
        priority,
        status
    }

    const getId = () => task.id;
    const getTitle = () => task.title;
    const getDescription = () => task.description;
    const getDueDate = () => task.dueDate;
    const getPriority = () => task.priority;
    const getStatus = () => task.status;

    const setTitle = (newTitle) => task.title = newTitle;
    const setDescription = (newDescription) => task.description = newDescription;
    const setDueDate = (newDueDate) => task.dueDate = newDueDate;
    const setPriority = (newPriority) => task.priority = newPriority; 
    const setStatus = (newStatus) => task.status = newStatus;

    return{
        getId,
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getStatus,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        setStatus
    }
} 

export { createTask };