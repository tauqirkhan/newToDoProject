import './style.css';
import { home, homeDiv } from './content/home';
import { createTask } from './content/utils/createTask';

home.render();
home.addTaskToHomeTaskArr(createTask('dsdv', 'title1', '23/03/23'));
homeDiv.addEventListener('click', home.render);