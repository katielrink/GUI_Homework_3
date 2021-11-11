import React from 'react';
import { ProductReview } from '../models/productReview';
import { Rating } from './rating';

export const ReviewList = props => <>
    <div id="reviewListTitle">Product Reviews
        <div id="numReviews">({props.reviews.length})</div>
    </div>
    <ul className="list-group">{
            !props.reviews.length && <li className="noReviews">
                <div className="reviewText">Be the first to add a review!</div>
            </li>
        }
        {
            props.reviews.map((x, i) => <li key={i}>
                <div className="review">
                    <div className="reviewRating">
                        <Rating value={x.rating[0]} />
                    </div>
                    <div className="reviewText">
                        <div className="username">{x.userName}</div>
                        <div className="comment">"{x.comment}"</div>
                    </div>
                </div>
            </li>)
        }
    </ul>
</>;