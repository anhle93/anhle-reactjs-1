import React from 'react';

function Search(props, { onSortClick, onFilterData }) {
    const onChange = (e) => {
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.elements);
    }


    return (
        <form action="#" className="shop-search" onSubmit={onSubmit}>
            <input type="text" placeholder="Your keyword...." onChange={onChange} />
            <button type='submit'><i className="fa fa-search" /></button>
        </form>
    );
}

export default Search;