function PizzaCard({ pizza }) {
    return (
        <div className="pizza-card">
                    <img src={pizza.pizzaImage} className="pizza-img" alt={pizza.name}/>
                    <h3 className="pizza-title">{pizza.name}</h3>
                    <p className="pizza-decription">{pizza.description}</p>
                    <div className="pizza-action">
                        <h5 className="pizza-price">{pizza.price} &#8376;</h5>
                        <button className="add-to-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                              </svg>
                        </button>
                    </div> 
                </div>
    )
}

export default PizzaCard;