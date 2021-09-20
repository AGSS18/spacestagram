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
        let apiKey = "x0mBY603lnwUvaxubeH2uANgMCG12plFfDk0DRko"
        let apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${newRange}`;
        axios.get(apiURL).then(handleResponse);
    }, [newRange])

    return (
        <main className="main container-big">
            <RangeForm handleRequest={handleRequest} data={data} />
            <ImagesList data={data} />
        </main>
    );
}

export default MainContent;