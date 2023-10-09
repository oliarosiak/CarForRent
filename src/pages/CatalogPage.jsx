import { carsAPI } from '../api/carsAPI';
import { useState, useEffect } from 'react';

import FilterForm from 'components/filterForm/FilterForm';
import CarsList from 'components/carsList/CarsList';
import LoadMoreBtn from 'components/loadMoreBtn/LoadMoreBtn';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isActiveBtn, setIsActiveBtn] = useState(true);

  useEffect(() => {
    const CARDS_PER_PAGE = 8;

    carsAPI().then(data => {
      const perPage = CARDS_PER_PAGE * page;
      const offers = data.slice(0, perPage);

      if (data.length < perPage) {
        setIsActiveBtn(false);
      }

      setCars(offers);
    });
  }, [page]);

  const loadMoreBtn = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <FilterForm />
      <CarsList cars={cars} />
      <LoadMoreBtn handler={loadMoreBtn} visible={isActiveBtn} />
    </div>
  );
};

export default CatalogPage;
