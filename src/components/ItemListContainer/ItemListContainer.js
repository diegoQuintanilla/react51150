import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products,setProducts] = useState([])
    const {id} = useParams()


    useEffect (() => {

        const asyncFunction = id ? getProductsByCategory : getProducts
        asyncFunction(id)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    },[id])
  
    return (
        <div>
            <h3 className="subTitulo">{props.greeting}</h3>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h3>{prod.name}</h3>
                            <Link to={`/item/${prod.id}`}>Detalle</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemListContainer