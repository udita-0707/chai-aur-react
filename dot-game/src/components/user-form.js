import React,{useState} from "react";


export default function UserForm(props){
    const [values, setValues] = useState('')
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h4>Username: </h4>
            <input value={values} type="text" onChange={(e)=>setValues(e.target.value)} />
            <button>Submit</button>
        </div>
    )
}