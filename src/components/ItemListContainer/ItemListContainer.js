import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h3 className="subTitulo">{props.greeting}</h3>
        </div>
    )
}

export default ItemListContainer