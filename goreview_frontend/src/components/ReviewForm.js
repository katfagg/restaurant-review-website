import { useState } from "react";

const ReviewForm = ({onSubmit}) => {

    const [newReview, setNewReview] = useState (
        {
            date: "",
            rating: "",
            pricing: "",
            diets: 0,
            accessibility: "" 
        }
    );

    const handleChange = (event) =>{
        const propertyName = event.target.name;
        const updatedNewReview = {...newReview};
        updatedNewReview[propertyName] = event.target.value;
        setNewReview(updatedNewReview);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(newReview);
        setNewReview({
            date: "",
            rating: "",
            pricing: "",
            diets: 0,
            accessibility: ""
        })};
    

    return(
        <div>
            <h3>Submit a Review</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date of Visit:</label>
                <input
                    id="date"
                    name="date" 
                    type="text" 
                    placeholder="date"
                    onChange={handleChange}
                    value={newReview.date}
                />
                <label htmlFor="rating">Rating:</label>
                <input 
                    id="rating"
                    name="rating"
                    type="text" 
                    placeholder="rating"
                    onChange={handleChange}
                    value={newReview.rating}
                />
                <label htmlFor="pricing">Pricing:</label>
                <input 
                    id="pricing"
                    name="pricing"
                    type="text" 
                    placeholder="pricing"
                    onChange={handleChange}
                    value={newReview.pricing}
                />
                <label htmlFor="diets">Diets:</label>
                <input 
                    id="diets"
                    name="diets"
                    type="text" 
                    placeholder="diets"
                    onChange={handleChange}
                    value={newReview.diets}
                />
                <label htmlFor="accessibility">Accessibility:</label>
                <input 
                    id="accessibility"
                    name="accessibility"
                    type="text" 
                    placeholder="accessibility"
                    onChange={handleChange}
                    value={newReview.accessibility}
                />
                <input type="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;