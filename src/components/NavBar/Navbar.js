import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Alem Indumentaria</Link>
            <div className="lista">
                <Link to='/category/celular'>Remeras</Link>
                <Link to='/category/tablet'>Camisas</Link>
                <Link to='/category/notebook'>Pantalones</Link>
                <CartWidget/>
            </div>
        </nav>
    )
}


export default NavBar