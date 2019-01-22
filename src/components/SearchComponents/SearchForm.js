import React from 'react';

import './Search.css';

const SearchForm = props => {
    return (
        <div className="search-form-container">
            <form>
                <div className="search-input-div">
                    <input
                        type="search"
                        placeholder="Search your tasks"
                        onChange={props.handleSearch}
                    />
                </div>
            </form>
        </div>

    )
}

export default SearchForm;