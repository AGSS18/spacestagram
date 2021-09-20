import { useState } from "react";
import './RangeForm.css';

function RangeForm(props) {
    let [range, setRange] = useState(10);
    let style = {color: "#ffffff"};
    
    function handleRange(event) {
        event.preventDefault();
        setRange(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleRequest(range);
    }

    if(props.data) {
        style.color = "#ffffff";
    } else {
        style.color = "#96d557";
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="range-label">{range}</label>
            <input className="input" onChange={handleRange} type="range" id="count" name="count" min="1" max="99" value={range}/>
            <button className="button" type="submit"><i className="fas fa-satellite-dish icon" style={style}></i></button>
        </form>
    );
}

export default RangeForm;