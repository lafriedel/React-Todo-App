import React from 'react';

const Search = props => {
        return (
        <div 
            onClick={() => props.markSearchComplete(props.search.id)}
            className={`to-do ${props.search.complete}` }    
        >
            <p>{props.search.task}</p>
        </div>
    );
}

export default Search;