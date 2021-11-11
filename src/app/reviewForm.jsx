import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../models/product';
import { ProductReview } from '../models/productReview';
import { Rating } from './rating';

export class ReviewForm extends React.Component {
    state = {
        userName: '',
        rating: '',
        comment: '',
    };

    onAddClick() {
        var dt = new Date();
        window.alert(this.state.userName + " " + this.state.rating);
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
                <h3>Add Review</h3>
                <form>
                    <h4>Name:</h4>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={this.state.username}
                        onChange={event => this.setState({ userName: event.target.value })} />
                    <h4>Rating:</h4>
                    <select
                        name="Rating"
                        id="Rating"
                        value={this.state.rating}
                        onChange={event => this.setState({ rating: event.target.value })}>
                        <option></option>
                        {
                            [1, 2, 3, 4, 5].map((x, i) => <option key={i}>{x + " Star(s)"}</option>)
                        }
                    </select>
                    <Rating value={this.state.rating[0]} />
                    <h4>Comment:</h4> 
                    <input
                        type="text-area"
                        name="comment"
                        id="comment"
                        value={this.state.comment}
                        onChange={event => this.setState({ comment: event.target.value })} />
                </form>
                <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={() => this.onAddClick()}>
                    Submit
                </button>
            </div>
        </>;
    }
}