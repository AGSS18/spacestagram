import { useState } from "react";
import './RangeForm.css';

function RangeForm(props) {
    let [range, setRange] = useState(10);
    
    function handleRange(event) {
        event.preventDefault();
        setRange(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleRequest(range);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="range-label">{range}</label>
            <input className="input" onChange={handleRange} type="range" id="count" name="count" min="1" max="99" value={range}/>
            <button className="button" type="submit"><i className="fas fa-satellite-dish icon"></i></button>
        </form>
    );
}

export default RangeForm;