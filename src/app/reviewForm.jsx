import React from 'react';

export class reviewForm extends React.Component {
    state = {
        userName: '',
        rating: '',
        comment: '',
        date: ''
    };

    onAddClick(){
        this.props.onReviewAdded(this.state);
        this.setState({
            userName: '',
            rating: '',
            comment: '',
            date: ''
        });
    }

    render(){
        return <>
            <div className="form">
                <div className="rating-input">
                    <select
                        name="number"
                        id="rating"
                        className="form-control"
                        value={this.state.review}
                        onChange={event=>this.setState({review: event.target.value})}
                    >
                        <option>1 Star</option>
                        <option>2 Star</option>
                        <option>3 Star</option>
                        <option>4 Star</option>
                        <option>5 Star</option>
                    </select>
                </div>
                <div className="form-input">
                    <input
                        userName="text"
                        rating="number"
                        comment="text"
                        date="date"
                        className="form-control"
                        value={this.state.review}
                        onChange={event => this.setState({review:event.target.value})}
                    />
                </div>
                <div className="form-input">
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={()=> this.onAddClick()}>
                    </button>
                </div>
            </div>
        </>;
    }
}