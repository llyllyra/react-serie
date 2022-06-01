import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./compenent/Card";

const App = () => {
  let [seriesData, setSeriesData] = useState([])
  useEffect(()=>{
    axios
        .get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API}&language=us-US&page=1
        `)
        .then((res) => setSeriesData(res.data.results))
  })


    return (
        <div>
              <h1>Serie du jour</h1>
          <div className="serie-container">
            {
                seriesData && seriesData
                    .map((serie)=>(
                        <Card key={serie.id} serie={serie} />
                    ))
            }
          </div>
        </div>
    );
};

export default App;