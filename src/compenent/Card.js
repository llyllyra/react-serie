import React from 'react';

const Card = ({serie}) => {
    return (
        <div>
            <h1>{serie.original_name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="{serie.original_name}"/>
            <p>{serie.overview}</p>
        </div>
    );
};
// ${`serie.poster_path}
export default Card;