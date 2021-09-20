import { useState } from "react";
import './RangeForm.css';

function RangeForm(props) {
    let [range, setRange] = useState(10);
    let style = {color: "#ffffff"};
    let status;
    
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
        status = "click to load!";
    } else {
        style.color = "#96d557";
        status = "loading...";
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-align">
                <label className="range-label">{"Display: "+ range}<span className="label-images"> {range > 1 ? "images" : "image"}</span> </label>
                <input className="input" onChange={handleRange} type="range" id="count" name="count" min="1" max="99" value={range}/>
                <button className="button" type="submit"><i className="fas fa-satellite-dish icon" style={style}></i><span className="search" style={style} > {status}</span></button>
            </div>
        </form>
    );
}

export default RangeForm;