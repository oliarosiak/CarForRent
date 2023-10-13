import { carsAPI } from '../api/carsAPI';
import { useState, useEffect } from 'react';

import FilterForm from 'components/filterForm/FilterForm';
import CarsList from 'components/carsList/CarsList';
import LoadMoreBtn from 'components/loadMoreBtn/LoadMoreBtn';
import EmptyFilterList from 'components/serviceFiles/EmptyFilterList';

const CARDS_PER_PAGE = 8;

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [priceList, setPriceList] = useState([]);
  const [minMil, setMinMil] = useState(null);
  const [maxMil, setMaxMil] = useState(null);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    carsAPI().then(data => {
      const prices = data
        .map(all => Number(all.rentalPrice.slice(1, all.rentalPrice.length)))
        .sort((a, b) => a - b)
        .filter((all, index, array) => array.indexOf(all) === index);
      setPriceList(prices);

      const mileage = data.map(all => all.mileage).sort((a, b) => a - b);
      const min = mileage[0];
      const max = mileage[mileage.length - 1];

      setMinMil(min);
      setMaxMil(max);

      setCars(data);
      setEmptyList(false);
    });
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
    setEmptyList(true);
    setCars(findBrand);
  };

  return (
    <div>
      <FilterForm
        onSubmit={filterHandler}
        carPriceList={priceList}
        min={minMil}
        max={maxMil}
      />
      {emptyList && <EmptyFilterList />}
      {advertsPerPage.length > 0 && <CarsList cars={advertsPerPage} />}
      {advertsPerPage.length >= perPage ? (
        <LoadMoreBtn handler={loadMoreBtn} visible={true} />
      ) : (
        <LoadMoreBtn handler={loadMoreBtn} visible={false} />
      )}
    </div>
  );
};

export default CatalogPage;
