import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from "react-loader-spinner";

function ImagesList(props) {
    console.log(props.data)
    if(props.data) {
        return("data loaded");
    } else {
        return(
            <section className="loader">
                <Loader
                    type="BallTriangle"
                    color="#a8dca8"
                    height={250}
                    width={250}
                />
                <p className="text-white">Loading...</p>
            </section>
        );
    }
}

export default ImagesList;