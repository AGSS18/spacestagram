import { useState, useEffect } from "react";
import ImagesList from "../mainContent/ImagesList";
import RangeForm from "../mainContent/RangeForm";
import axios from "axios";

import './Main.css';

function MainContent() {
    const [newRange, setNewRange] = useState(10);
    const [data, setData] = useState(null);

    function handleRequest(response) {
        setData(null);
        setNewRange(response);
    }
    function handleResponse(response) {
        setData(response);
    }

    useEffect(() => {
        let apiURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${newRange}`;
        axios.get(apiURL).then(handleResponse);
    }, [newRange])

    return (
        <main className="main">
            <RangeForm handleRequest={handleRequest}/>
            <ImagesList data={data} />
        </main>
    );
}

export default MainContent;