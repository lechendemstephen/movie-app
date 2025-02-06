import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"> Movie App </Link>
            </div>

        </nav>

        <div className="nav-links">
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/favorites' className='nav-link'>Favorites</Link>

        </div>

        </>


    );


}

export default NavBar; 