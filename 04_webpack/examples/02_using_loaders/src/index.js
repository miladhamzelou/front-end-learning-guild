import model from './model';
import buildTodoList from './listView';
import './app.css'

const todoList = buildTodoList(model.todos);
const completedList = buildTodoList(model.completedTodos);

const root = document.getElementById('root');

root.innerHTML = `
  <h2>Incomplete</h2>
  ${todoList.outerHTML}

  <h2>Complete</h2>
  ${completedList.outerHTML}
`;