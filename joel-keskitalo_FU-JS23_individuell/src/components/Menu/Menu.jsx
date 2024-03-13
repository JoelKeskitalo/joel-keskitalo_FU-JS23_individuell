import { Link } from 'react-router-dom';
import useStore from '../Store/Store';
import './menu.scss';


function Menu() {

    const user = useStore((state) => state.user)


    return (

        <div className='menupage-container'>


            <nav>
                <ul>
                    <li><Link to="/coffemenu">Meny</Link></li>
                    <div className='horizontal-line'></div>
                    <li><Link to="/about">Vårt kaffe</Link></li>
                    <div className='horizontal-line'></div>
                    
                    <li>
                        {user ? <Link to="/profile">Min profil</Link> : <Link to="/createprofile">Skapa Profil</Link>}
                    </li>

                    <div className='horizontal-line'></div>
                    <li><Link to="/status">Orderstatus</Link></li>


                </ul>
            </nav>
        </div>

    )
}

export default Menu;
