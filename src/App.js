import './App.css';
import React, { useState, useEffect } from 'react';


const useFetch = () => {
  const url = "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.Details);
    setLoading(false);

  }, [])
  return { data, loading };
}

export default () => {
  const { data, loading } = useFetch()
  console.log(data);
  return (
    <section>
      {loading ?
        <div>...loading</div> :
        <div>{data.map(i=>i.Title)}<br/></div>
      }
    </section>
  );

};
