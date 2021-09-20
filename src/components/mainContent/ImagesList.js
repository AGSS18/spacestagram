import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from "react-loader-spinner";

import './ImagesList.css';
import ImageComponent from "./ImageComponent";

function ImagesList(props) {
    if(props.data) {
        return(
            <section className="images-list container-big">
                {props.data.data.map(function(singleData, index){
                    if(singleData.media_type === "image") {
                        return (
                            <ImageComponent 
                                key={index}  
                                date={singleData.date} 
                                description={singleData.explanation}
                                image={singleData.url}
                                title={singleData.title} 
                                />
                        );
                    } else {
                        return null;
                    }
                })}
                <footer className="footer">
                    <a href="https://github.com/AGSS18/spacestagram" target="_blank" rel="noreferrer">
                        Open-source code
                    </a> 
                    {" "} by Ana Sala
                </footer>
            </section>
        );
    } else {
        return(
            <section className="loader">
                <Loader
                    type="BallTriangle"
                    color="#96d557"
                    height={200}
                    width={200}
                />
            </section>
        );
    }
}

export default ImagesList;