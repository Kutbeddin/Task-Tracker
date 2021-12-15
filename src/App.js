import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
// import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

   const [showAddTask, setShowAddTask] = useState(false);

  //ADD TASK
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = { id,...newTask };
    setTasks([ addNewTask,...tasks]);
  
  };
  //DELETE TASK
  const deleteTask = (deleteTaskid) => {
    setTasks(tasks.filter((task) => task.id !== deleteTaskid));
  };

  //TOGGLE DONE 

  const toggleDone=(toggleDoneId)=>{
      setTasks(tasks.map((task)=>task.id===toggleDoneId ? {...task, isDone:!task.isDone}:task))
   }
   
   //SHOW ADD TASK
   const toggleShow = ()=> setShowAddTask(!showAddTask);


  //DELETE ALL TASKS
const deleteAll = ()=>setTasks("")

  return (
    <div className="container">
      <Header title="Task Tracker"  toggleShow={toggleShow}  showAddTask={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>:<p style={{textAlign:"center"}}>NO TASK TO SHOW</p>}
      {tasks.length  > 0   && <button className="btn2" onClick={deleteAll}>DELETE ALL</button>}

    
    
    </div>
  );
}

export default App;
