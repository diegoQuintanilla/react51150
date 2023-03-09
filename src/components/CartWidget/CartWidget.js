import './CartWidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    return (
        
        <div className='contador'>
            <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
            <div className="elementos">3</div>
        </div>
    )
}


export default CartWidget