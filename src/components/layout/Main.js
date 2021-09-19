import { useState } from "react";
import RangeForm from "../mainContent/RangeForm";

import './Main.css';

function MainContent() {
    const [isLoading, setIsLoading] = useState(true);

    function handleRequest(response) {
        setIsLoading(true);
    }

    return(
        <main className="main">
            <RangeForm handleRequest={handleRequest}/>
        </main>
    );
}

export default MainContent;