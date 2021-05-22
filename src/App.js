import * as React from "react";
import "./App.css";
import List from "./Component/List";
import { Task } from "./Task/Task";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
function App() {
  const [todoName, setTodoName] = React.useState("");
  const [task, setTask] = React.useState([]);

  // const [pendingTask,setPendingTask] = React.useState([]);
  // const [completeTask,setcompleteTask] = React.useState([]);

  // React.useEffect(() => {
  //  task.forEach((item)=>{
  //    const pending = task.filter((item)=> item.status!==1)
  //  })
  // }, [task]);

  function removeTask(id) {
    const remove = task.filter((item) => item.id !== id);
    setTask(remove);
  }

  function changeTask(id) {
    const change = task.map((item) => {
      if (item.id === id) {
        if (item.status === 1) {
          return { ...item, status: 0 };
        } else {
          return { ...item, status: 1 };
        }
      }
      return item;
    });
    console.log(change);
    setTask(change);
  }

  function editTask(id) {
    const newTaskName = prompt("Enter the task Name");
    console.log(newTaskName);
    const change = task.map((item) => {
      if (item.id === id && newTaskName !== "" && newTaskName !== null) {
        return { ...item, taskName: newTaskName };
      }
      return item;
    });
    console.log(change);
    setTask(change);
  }
  const addTodo = () => {
    const alredyPresent = task.find((item) => item.taskName === todoName);
    if (!alredyPresent) setTask([...task, new Task(todoName)]);
    else alert("TaskName Already Present");
    setTodoName("");
  };

  return (
    <div className='App'>
      <div className='APP__InputContainer'>
        <h1 className='Heading'>TODO</h1>
        <div className='App_SearchBoxContainer'>
          <input
            type='text'
            value={todoName}
            className='App__SearchBox'
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className='App_SubmitContainer'>
          {/* <input
              type='button'
              className='App__Submit'
              value='Add Task'
              onClick={() => {
                setTask([...task, new Task(todoName)]);
              }}
            /> */}
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              todoName !== "" ? addTodo() : alert("Enter Valid Task");
            }}>
            ADD
          </Button>
        </div>
      </div>
      <div className='__card'>
        <Card className='card_TopContainer'>
          <p className='card_Heading'>Pending List</p>
          <hr></hr>
          <div className='card_Container'>
            {task.map((item) => {
              return (
                item.status === 0 && (
                  <List
                    key={item.id}
                    Item={item}
                    remove={() => removeTask(item.id)}
                    changeTask={() => changeTask(item.id)}
                    edit={() => editTask(item.id)}
                  />
                )
              );
            })}
          </div>
        </Card>
        <Card className='card_TopContainer'>
          <p className='card_Heading'>Completed List</p>
          <hr></hr>
          <div className='card_Container'>
            {task.map((item) => {
              return (
                item.status === 1 && (
                  <List
                    key={item.id}
                    Item={item}
                    remove={() => removeTask(item.id)}
                    changeTask={() => changeTask(item.id)}
                    edit={() => editTask(item.id)}
                  />
                )
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
