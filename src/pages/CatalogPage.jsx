import { carsAPI } from '../api/carsAPI';
import { useState, useEffect } from 'react';

import FilterForm from 'components/filterForm/FilterForm';
import CarsList from 'components/carsList/CarsList';
import LoadMoreBtn from 'components/loadMoreBtn/LoadMoreBtn';

const CARDS_PER_PAGE = 8;

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    carsAPI().then(data => {
      setCars(data);
    });

    console.log('first');
  }, []);

  const loadMoreBtn = () => {
    setPage(page + 1);
  };

  const perPage = CARDS_PER_PAGE * page;
  const advertsPerPage = cars.slice(0, perPage);

  const filterHandler = ({ brand, price, min, max }) => {
    const findBrand = cars
      .filter(all => all.make === brand.value)
      .filter(all => {
        const onlyPrice = all.rentalPrice.slice(1, all.rentalPrice.length);
        return onlyPrice === price.value;
      })
      .filter(all => all.mileage >= min.value && all.mileage <= max.value);
    setCars(findBrand);
  };

  return (
    <div>
      <FilterForm onSubmit={filterHandler} />
      <CarsList cars={advertsPerPage} />
      {advertsPerPage.length >= perPage ? (
        <LoadMoreBtn handler={loadMoreBtn} visible={true} />
      ) : (
        <LoadMoreBtn handler={loadMoreBtn} visible={false} />
      )}
    </div>
  );
};

export default CatalogPage;
