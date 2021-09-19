import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from "react-loader-spinner";

import './ImagesList.css';
import ImageComponent from "./ImageComponent";

function ImagesList(props) {
    console.log(props.data)
    if(props.data) {
        return(
            <section className="images-list container-big">
                {props.data.data.map(function(singleData, index){
                    return (
                        <ImageComponent 
                            key={index}  
                            date={singleData.date} 
                            description={singleData.explanation}
                            image={singleData.url}
                            title={singleData.title} 
                            />
                    );
                })}
            </section>
        );
    } else {
        return(
            <section className="loader">
                <Loader
                    type="BallTriangle"
                    color="#a8dca8"
                    height={200}
                    width={200}
                />
                <p className="text-white">Loading...</p>
            </section>
        );
    }
}

export default ImagesList;