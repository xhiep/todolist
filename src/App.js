import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import TodoList from "./component/TodoList";


const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(()=>{
    if(localStorage.getItem(TODO_APP_STORAGE_KEY)){
      setTodoList(JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY)))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(todoList))
  },[todoList])

  const handleTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const handleClick = useCallback(() => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
  }, [todoList, textInput]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((pre) =>
      pre.map(todo=>todo.id === id ? { ...todo, isCompleted: true } : todo)
    );
  }, []);

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <TextField
        name="add-todo"
        placeholder=" Thêm việc cần làm"
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={handleClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={handleTextInputChange}
      ></TextField>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}></TodoList>
    </>
  );
}

export default App;
