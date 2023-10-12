import { useEffect, useState } from 'react';
import CarsList from 'components/carsList/CarsList';
import EmptyFavorite from 'components/serviceFiles/EmptyFavorite';

const FavoritePage = () => {
  const [favoriteCarList, setFavoriteCarList] = useState([]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('fav')) || [];
    setFavoriteCarList(favList);
  }, []);

  return (
    <div>
      {favoriteCarList.length === 0 ? (
        <EmptyFavorite />
      ) : (
        <CarsList cars={favoriteCarList} />
      )}
    </div>
  );
};

export default FavoritePage;
