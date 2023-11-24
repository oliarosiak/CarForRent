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
  const [emptyList, setEmptyList] = useState(false);

  const [filterBrand, setFilterBrand] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterMinMile, setFilterMinMile] = useState('');
  const [filterMaxMile, setFilterMaxMile] = useState('');

  useEffect(() => {
    carsAPI().then(data => {
      const prices = data
        .map(all => Number(all.rentalPrice.slice(1, all.rentalPrice.length)))
        .sort((a, b) => a - b)
        .filter((all, index, array) => array.indexOf(all) === index);
      setPriceList(prices);

      const findBrand = data
        .filter(all => {
          if (filterBrand !== '') {
            return all.make === filterBrand;
          }
          return all;
        })
        .filter(all => {
          if (filterPrice !== '') {
            return (
              Number(all.rentalPrice.slice(1, all.rentalPrice.length)) <=
              Number(filterPrice)
            );
          }
          return all;
        })
        .filter(all => {
          if (filterMinMile !== '') {
            return all.mileage >= Number(filterMinMile);
          }
          return all;
        })
        .filter(all => {
          if (filterMaxMile !== '') {
            return all.mileage <= Number(filterMaxMile);
          }
          return all;
        });

      findBrand.length === 0 ? setEmptyList(true) : setEmptyList(false);
      setCars(findBrand);
    });
  }, [filterBrand, filterPrice, filterMinMile, filterMaxMile]);

  const loadMoreBtn = () => {
    setPage(page + 1);
  };

  const perPage = CARDS_PER_PAGE * page;
  const advertsPerPage = cars.slice(0, perPage);

  const filterHandler = (brand, price, min, max) => {
    setFilterBrand(brand);
    setFilterPrice(price);
    setFilterMinMile(min);
    setFilterMaxMile(max);
  };

  return (
    <div>
      <FilterForm onSubmit={filterHandler} carPriceList={priceList} />
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
