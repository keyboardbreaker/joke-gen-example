import './App.css';
import React, { useState, useEffect } from 'react';

const useFetch = () => {
  const url = "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyApi()  {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.Details);
      setLoading(false);
    }
    fetchMyApi();
  }, [])
  return { data, loading };
}

const App = () => {
  const { data, loading } = useFetch()
  return (
    <section>
      {loading ?
        <div>...loading</div> :
        <div>
          <ul>
          {
            data.map((element, index) => 
              {
                return <li key={index}>{index + " " + element.Title}</li>
              })
          }
          </ul>
        </div>
      }
    </section>
  );
};

export default App;