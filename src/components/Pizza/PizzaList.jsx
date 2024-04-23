import { useState, useEffect } from "react";
import PizzaCard from "./PizzaCard"
import Loading from "../Loading";
import Error from "../Error";

function PizzaList() {

    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPizzas() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://6627abf0b625bf088c094380.mockapi.io/pizza"
                );
                const data = await res.json();
                setPizzas(data);
            } catch(error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPizzas();
    }, []);

    return (
        <section class="pizzas">    
        <div class="container">
            <h1 class="title">Choose your smth</h1>
            <div class="pizzas-row">
                {isLoading ? (
                    <Loading />
                ) : (pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id} />)
                    )
                }
                {isError && <Error/> }
            </div>
        </div>
    </section>
    )
}

export default PizzaList;