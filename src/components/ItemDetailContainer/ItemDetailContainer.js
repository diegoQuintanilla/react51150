import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(res => {
                setProduct(res)
            })
            .catch(error => {
                console.log(error)
            }) 
    },[itemId])
    
    return (
        <div>
            <h1>detalle del producto</h1>
            <div>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.name} style={{width: 200}}/>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Descripcion: {product.description}</p>
            </div>
        </div>
    )
}


export default ItemDetailContainer