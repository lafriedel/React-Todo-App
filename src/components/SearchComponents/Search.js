import React from 'react';

import '../ToDoComponents/ToDo.css'

const Search = props => {
        return (
        <div 
            onClick={() => props.markComplete(props.search.id)}
            className={`to-do ${props.search.complete}` }    
        >
            <p>{props.search.task}</p>
        </div>
    );
}

export default Search;