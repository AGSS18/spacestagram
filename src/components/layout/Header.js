import './Header.css';

import spaceship from '../../media/spaceship.png';

function Header() {
    return(
        <header className="header">
            <div>
                <h1 className="logo">
                    Spacestagram <span className="legend">Brought to you by NASA's APOD API</span>
                </h1>
            </div>
            <div className="spaceship">
                <img className="spaceship-img" src={spaceship} alt="spaceship"/>
            </div>
        </header>
    );
}

export default Header;