import { useState } from 'react';

import './ImageComponent.css';

function ImageComponent(props) {
    const [isFavorite, setIsFavorite] = useState(false);

    const style = {
        color: "rgb(194, 45, 45)",
        animation: "scale 1s alternate-reverse infinite",
    }

    function toggleFavoritesStatusHandler() {
       if(isFavorite) {
           setIsFavorite(false);
       } else {
           setIsFavorite(true);
       }
    }

    return(
            <div className="component-card">
                <div className="image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="content">
                    <h3 className="title">{props.title}<span className="date">{props.date}</span> </h3>
                    <p className="description">{props.description}</p>
                </div>
                <div className="actions">
                        <button onClick={toggleFavoritesStatusHandler}>{isFavorite ? <i className="fas fa-heart" style={style}></i> : <i className="far fa-heart" style={{color: "rgb(123, 122, 122)"}}></i>}</button>
                </div>
            </div>
    );
}

export default ImageComponent;