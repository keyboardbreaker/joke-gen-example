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
  // initialise
  const { data, loading } = useFetch();
  const [current, setCurrent] = useState(0);
  let length = 0;
  
  // waiting for fetch to complete
  if(data != null && loading === false) {
    length = data.length;
  }
  
  // slider controls
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
 
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
 
  if (!Array.isArray(data) || length <= 0) {
    return null;
  }
  // END slider controls

  // imgSlides is better name for data if it's just images coming from the fetch, 
  // so can rename it even earlier, ie, line 6
  const imgSlides = data;

  return (
    <section>
      {loading ?
        <div>...loading</div> :
        <div>
          <button onClick={prevSlide}>&lt; left</button>
          <button onClick={nextSlide}>right &gt;</button>
          {
            imgSlides.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.ImageUrl} alt={slide.Title} className='image' />
                  )}
                </div>
              );
            })
          }
        </div>
      }
    </section>
  );
};

export default App;