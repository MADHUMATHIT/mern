import React ,{useState} from 'react'

const Todo = () => {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([{
        task:'Read',
        status:false
    }])
    const [edit,setEdit]= useState(null);
    const handleAddOrEdit=()=>{
       // e.preventDefault();
        if(edit){

        }
        else{
            setTodos([...todos,{task:task,status:false}]);

        }
        setTask('');
    };
    const handleDelete=()=>{};
    const handleToggleStatus=()=>{};

  return (
    <div>
        <h1>Todo</h1>
        <label>Task: </label>
        <input type="text" placeholder='Enter the task'
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAddOrEdit}>{edit ? "Update" : "Add"}</button>
        <br /><br />
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    <span style={{cursor:"pointer",textDecoration:todo.status ? "line-through" : "none"}}>{todo.task}</span>
                    <button>✏️</button>
                    <button>🗑️</button>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo