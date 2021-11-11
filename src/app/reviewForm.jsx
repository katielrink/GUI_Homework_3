import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../models/product';
import { ProductReview } from '../models/productReview';
import { Rating } from './rating';
import "./reviewForm.css"

export class ReviewForm extends React.Component {
    state = {
        userName: '',
        rating: '',
        comment: '',
    };

    onAddClick() {
        var dt = new Date();
        var review = new ProductReview(this.state.userName, this.state.rating, this.state.comment, dt);
        this.props.addReview(review);
        this.setState({
            userName: '',
            rating: '',
            comment: '',
        });
    }

    render(){
        return <>
            <div className="form">
                <h3 className="reviewTitle">Add Review</h3>
                <form>
                    <label className="label together">Name:</label>
                    <input
                        type="text"
                        className="name together"
                        id="name"
                        value={this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value })} />
                    <label className="label together">Rating:</label>
                    <select
                        className="Rating together"
                        id="Rating"
                        value={this.state.rating}
                        onChange={event => this.setState({ rating: event.target.value })}>
                        <option></option>
                        {
                            [1, 2, 3, 4, 5].map((x, i) => <option key={i}>{x + " Star(s)"}</option>)
                        }
                    </select>
                    <Rating className="together" value={this.state.rating[0]} />
                    <h4 className="label">Comment:</h4> 
                    <input
                        type="text-area"
                        className="comment"
                        id="comment"
                        value={this.state.comment}
                        onChange={event => this.setState({ comment: event.target.value })} />
                </form>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.onAddClick()}>
                    Submit
                </button>
            </div>
        </>;
    }
}