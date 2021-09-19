import './Header.css';

import spaceship from '../../media/spaceship.png';

function Header() {
    return(
        <header className="header">
            <div className="logo">
                Spacestagram <span className="legend">Brought yo you by NASA's image API</span>
            </div>
            <div className="spaceship">
                <img className="spaceship-img" src={spaceship} />
            </div>
        </header>
    );
}

export default Header;