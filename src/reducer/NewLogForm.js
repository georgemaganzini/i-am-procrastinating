import React, {useContext, useState, useEffect} from 'react';
import { ProcrastinationContext } from '../procrastinationContext';
import { useLocalStorage } from '../useLocalStorage';

const NewLogForm = () => {
    // const {test, setTest} = useContext(ProcrastinationContext);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(test)
    //     setTest("");
    // }
//    useEffect(() => {

//     localStorage.setItem("name", JSON.stringify(test));
//     }, [test2]);


const [test2, setTest2] = useLocalStorage("name", "");

const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
}


    return(
            <form>
                <input type="text" placeholder="What inspires you?" value={test2} onChange={(e)=>setTest2(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default NewLogForm;