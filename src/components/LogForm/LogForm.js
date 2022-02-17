import React, {useState} from 'react';
import './LogForm.css';

const LogForm = (props) => {

const [logEntry, setLogEntry] = useState("")

function addEntry() {
    let entryString = localStorage.getItem(props.parent)
    let entry = []
    if (entryString) entry = JSON.parse(entryString)
    entry.push(logEntry)
    localStorage.setItem(`${props.parent}`, JSON.stringify(entry))
}

const handleChange = (e) => {
        setLogEntry(e.target.value)
}

const handleSubmit = (e) =>{
        e.preventDefault();
        setLogEntry(e.target.value)
        addEntry();
        setLogEntry("");

}
    return(
            <form onSubmit={handleSubmit} className="z-index-me">
                <input type="text" value={logEntry} onChange={handleChange}/>
                <input type="submit" value="Log it!" className={`${props.color}-button`} />
            </form>
    )
}

export default LogForm;