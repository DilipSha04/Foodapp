import { useState } from "react";

const UserCard = (props)=>{
    const [count, setCount] =useState(0) 
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                const deCount = count - 1
                setCount(deCount);
            }}>Decrease -</button>
            <button onClick={()=>{
                const inCount = count + 1
                setCount(inCount);
            }}>Increase +</button>
            <h2>Name : {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h3>Contact : {props.contact}</h3>
        </div>
    )
}
export default UserCard;