import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function Todo(){
    //for showing task in list
    let[task,setTask]=useState([{todo:"Sample task",id:uuidv4()}]);

    //for geeting new task from input and pushing that to list

    let[newtask,setnewTask]=useState("");

    function getTask(event){
          setnewTask(event.target.value);
    }

    //after getting task pushing it to task array by spreading it
    function showTask(){
        setTask((currentTask)=>{
            return [...currentTask,{todo:newtask ,id:uuidv4()}];
        });
        setnewTask("");
    }

    function remove(id){
        setTask(task.filter((ab)=> ab.id !=id));//it delete the element which have id ==id and return copy of array after removing that element
            
    }
    function upperCaseAll(){
        setTask(task.map((ab)=>{
        return {...ab, todo :ab.todo.toUpperCase()};
         })
        )
    }

    function done(id){

        setTask(task.map((x)=>{
            if(x.id===id){
                return{...x,todo:<del>{x.todo}</del>};
            }
            else{
                return x;
            }
        }))

        
            
    }
    return(
    <div>
     <h3>To Do List</h3>
     <br></br><br></br>
     <input placeholder="Enter task" onChange={getTask} value={newtask}></input>
     <br></br><br></br>
     <button style={{backgroundColor:"lime"}} onClick={showTask}>Add Task</button>
     <h5>Tasks is below:</h5>
     <ul>
        {
            task.map((abc)=>{
                return(
                <li key={abc.id}>
                 {abc.todo} &nbsp;&nbsp;&nbsp;
                <button onClick={()=>remove(abc.id)} >Delete</button>  &nbsp;&nbsp;&nbsp;
                <button onClick={()=>done(abc.id)}>Mark as done</button>
                </li>
                ////we are passing argument as arrow function  because it preevent the function from execution in console and it executes only when we click on button
              )
            })
        }
        <br></br>
        
     </ul>
     <button onClick={upperCaseAll} style={{backgroundColor:"violet"}}>UPPER CASE</button>
    </div>)
}