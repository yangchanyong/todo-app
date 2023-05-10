import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
