import React ,{useState}from 'react'
import Todolist from './Todolist';
import'./TodoForm.css';

function TodoForm(props) {
    const [input,setInput]=useState("");
    const [items,setitems]=useState([]);
    const handleChange= e =>{
        setInput(e.target.value);
    }
   const listofitems=()=>{
    if(input===""){
      return;
    }
    const it=[...items,input];
    setitems(it);
    setInput("");
   }
   const deleteitems=(id)=>{
    const it=items.filter((el,i)=>{
              return i!==id;
    })
    setitems(it);

   }
  return (
    <div className='main-div'>
      <div className='centre-div'>
        <h1>To Do List</h1>
 <input type="text" placeholder='Add a todo' value={input}  name='text' className='todo-input' onChange={handleChange}/>
  <button className='todo-button' onClick={listofitems}>+</button>
    {items.map((e,i)=>{
      return <Todolist key={i} id={i} text={e} onselect={deleteitems}/>;
    })}
  
    </div>
    </div>
  )
}

export default TodoForm