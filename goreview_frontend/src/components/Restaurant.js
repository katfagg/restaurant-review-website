import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant}) => {

    const route = `/${restaurant.id}`

    return (
        <>
        <div id="restaurant-card">
            <h2>{restaurant.name}</h2>
            <img></img>

                <p>Location: {restaurant.location}</p>
                <p>Cuisine: {restaurant.cuisine}</p>

            <Link to={route}> <button>Read more</button></Link>

        </div>
        </>

    )

}

export default Restaurant;