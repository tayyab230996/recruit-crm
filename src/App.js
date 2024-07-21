import React, {useState} from "react";
import "./style.css";

export default function App() {

  var data = [{name:"shivaji goud vummagoni",id:1,role:"Architect"},{name:"chaitanya Puli",id:2,role:"SA"},{name:"suneel Chema",id:3,role:"Architect"}];

  const [employees, setEmployees]= useState(data);
  const [values, setValues] = useState();
  const [name, setName] = useState();
  const [id, setID] = useState();
  const [role, setRole]= useState();

  function addvalue(e){
    if(e.target.name=="name")
    {
      setName(e.target.value)
    }
    else if(e.target.name =="id")
    {
      setID(e.target.value)
    }
    else if(e.target.name="role")
    {
      setRole(e.target.value)
    }
  }

  function submitvalue(e){
    var newemp= {name:name,id:id,role:role};
    setEmployees([...employees,newemp])
  }

  function removeuser(e){
    
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" name="name" onChange={addvalue}/>
      <input type="text" name="id" onChange={addvalue}/>
      <input type="text" name="role" onChange={addvalue}/>
      <button onClick={submitvalue}>Submit</button>
      <button onClick={removeuser}>Delete</button>
      <p>{employees.length && employees.map((e)=>{
        return(
        <div>
          <span>{e.name}</span>
        <span>{e.id}</span>
        <span>{e.role}</span>
        </div>)
      })}</p>
    </div>
  );
}