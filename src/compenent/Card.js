import React from 'react';

const Card = ({serie}) => {
    let average = Math.round(serie.vote_average*10)
    return (
        <div className="serie-card">
           <div className="serie-header">
               <h2>{serie.original_name}</h2>
               <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="{serie.original_name}"/>
               <p>{serie.first_air_date}</p>
               <p>{average}%</p>
           </div>
            <p>{serie.overview}</p>
        </div>
    );
};
// ${`serie.poster_path}
export default Card;