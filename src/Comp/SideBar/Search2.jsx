import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.state.search = target.value;
        console.log(target.value);
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
    }

    render() {
        return (
            <form action="#" className="shop-search" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your keyword...." onChange={this.handleChange} />
                <button type='submit'><i className="fa fa-search" /></button>
            </form>
        );
    }
    
}

export default Search;