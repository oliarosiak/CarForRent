import { carsAPI } from '../api/carsAPI';
import { useState, useEffect } from 'react';

import CarsList from 'components/carsList/CarsList';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsAPI().then(data => {
      setCars(data);
    });
  }, []);

  return (
    <div>
      <CarsList cars={cars} />
      <button>Load more</button>
    </div>
  );
};

export default CatalogPage;
