import React from 'react'

export const reviewList = props => <>
    <ul className = "list-group">
        <li className = "list-group-item">Reviews</li>
        {
            !props.productReviews.length && <li className="list-group-item">Be the first to review!</li>
        }{
            props.productReviews.map((x,i) => <li className="list-group-item" key={i}>{x.review}</li>) 
        }
    </ul>
</>;

//review count
//rating