import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"

const RestaurantReviewPage = ({restaurant,reviews}) => {

    // add filter here then pass relevant list of reviews to ReviewList
    
    const filteredReviews = reviews.filter(review => review.restaurant.name === restaurant.name)
    
    return (
        <>
            <h3>Hey from RestaurantReviewPage</h3>
            <ReviewList restaurant={restaurant} reviews={filteredReviews}/>
            {/* <ReviewForm restaurant={restaurant}/> */}

        </>
    )
}

export default RestaurantReviewPage;