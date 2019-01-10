import React from 'react';

const SearchForm = props => {
    return (
        <form role="search">
            <input
                type="search"
                placeholder="Search your tasks"
                onChange={props.handleSearch}
            />
        </form>
    )
}

export default SearchForm;