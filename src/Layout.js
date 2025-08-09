import { useState } from "react";
function Layout (){
    const [name, setName] = useState('')
    const [Fruits, setFruits] = useState (['mango','apple','banana','grapes'])
    function handleChange (event){
        setName(event.target.value)}
    function handleChange (Fruits){
        
    }
    return(
        <>
        <div style={{padding:"20px"}}> 
    {/*<input 
        value={name}
        placeholder="Enter name" 
        onChange={handleChange}
        />*/}
            <ul> 
                { Fruits.map(function(fruit,index) {
                  return (<li key={index}>{fruit}</li>)}
                )}
                
            </ul>
        </div>
</>
    )}
export default Layout;