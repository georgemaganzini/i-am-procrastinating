import React, {useContext, useState, useEffect} from 'react';
import { ProcrastinationContext } from '../procrastinationContext';

const NewLogForm = () => {

const [test2, setTest2] = useState()

function addInspiration() {
    let inspirationString = localStorage.getItem("inspirations")
    let inspirations = []
    if (inspirationString){
        inspirations = JSON.parse(inspirationString)
    }
    inspirations.push(test2)
    localStorage.setItem("inspirations", JSON.stringify(inspirations))
}

const handleChange = (e) => {
        e.preventDefault();
        setTest2(e.target.value)
}

const handleSubmit = (e) =>{
        e.preventDefault();
        setTest2(e.target.value)
        addInspiration();
        setTest2("");

}
    return(
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What inspires you?" value={test2} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default NewLogForm;