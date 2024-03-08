import { Link } from 'react-router-dom';
import './menu.scss';

function Menu() {

    return (

        <div className='menupage-container'>
            <nav>
                <ul>
                    <li><Link to="/coffemenu">Meny</Link></li>
                    <div className='horizontal-line'></div>
                    <li><Link to="/about">Vårt kaffe</Link></li>
                    <div className='horizontal-line'></div>
                    <li><Link to="/createprofile">Min profil</Link></li>
                    <div className='horizontal-line'></div>
                    <li><Link to="/status">Orderstatus</Link></li>

                    <li><Link to="/profile">Profile</Link></li>

                </ul>
            </nav>
        </div>

    )
}

export default Menu;
