import '../styles/header.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <div className='header-wrapper' >
            <Link to='/' >
                <img  src={logo} alt="logo du site" />
            </Link>
            
            <div>
                <Link to='/' >
                    <p>Accueil</p>
                </Link>

                <Link to='/a-propos'>
                    <p>A propos</p>
                </Link>
                
            </div>
        </div>
    )

}

export default Header