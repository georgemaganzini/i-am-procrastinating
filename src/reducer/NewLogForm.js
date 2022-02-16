import React, {useContext, useState} from 'react';
import { LogContext } from '../context/LogContext';

const NewLogForm = () => {
    const { dispatch } = useContext(LogContext);
    const [test, setTest] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_INSPIRATION", log: {
            category: test,
            entry: test,
        }});
        setTest("");
    }
    return(
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What inspires you?" value={test} onChange={(e)=>setTest(e.target.value)}/>
                <input type="submit" value="add test" />
            </form>
    )
}

export default NewLogForm;