import React ,{useState}from 'react'
import Todolist from './Todolist';
import'./TodoForm.css';
import ReactScrollToBottom from 'react-scroll-to-bottom';

function TodoForm(props) {
        let put=[];
        let tt=[];
  
    if(localStorage.length>0){
      put= JSON.parse(localStorage.getItem("tt"));
      for(let i=0;i<put.length;i++){
        tt.push(put[i].text);
      }
    }

  
    const [input,setInput]=useState("");
    let [items,setitems]=useState(tt);
    
   
    
    
    const handleChange= e =>{
        setInput(e.target.value);
    }
   const listofitems=()=>{
    if(input===""){
      return;
    }
    const it=[...items,input];
    setitems(it);
    let data=[];
    for(let i=0;i<it.length;i++){
         data.push({id:i,text:it[i]});
    }
    localStorage.setItem("tt", JSON.stringify(data));
    setInput("");
   }
   const deleteitems=(id)=>{
    const it=items.filter((el,i)=>{
              return i!==id;
    })
    setitems(it);
    localStorage.clear();
    let data=[];
    for(let i=0;i<it.length;i++){
         data.push({id:i,text:it[i]});
    }
    localStorage.setItem("tt", JSON.stringify(data));

   }

     
  return (
    <div className='main-div'>
      <ReactScrollToBottom className='centre-div'>
        <h1>To Do List</h1>
 <input type="text" placeholder='Add a todo' value={input}  name='text' className='todo-input' onChange={handleChange}/>
  <button className='todo-button' onClick={listofitems}>+</button>
<<<<<<< HEAD
    
    {items.map((e,i)=>{
      return <Todolist key={i} id={i} text={e} onselect={deleteitems}/>;
    })}
   
=======

    {items.map((e,i)=>{
      return <Todolist key={i} id={i} text={e} onselect={deleteitems}/>;
    })}
>>>>>>> ab0ebf062063713fdb87de806e31c75c6cbf532e
     
  
    </ReactScrollToBottom>
    </div>
  )
}

export default TodoForm
