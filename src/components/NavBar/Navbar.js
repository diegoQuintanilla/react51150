import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1 className='titulo'>Alem Indumentaria</h1>
            <div className="lista">
                <button className='item'>Remeras</button>
                <button className='item'>Camisas</button>
                <button className='item'>Pantalones</button>
                <CartWidget/>
            </div>
        </nav>
    )
}


export default NavBar