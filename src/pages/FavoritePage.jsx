import { useEffect, useState } from 'react';
import CarsList from 'components/carsList/CarsList';

const FavoritePage = () => {
  const [favoriteCarList, setFavoriteCarList] = useState([]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('fav')) || [];  
    setFavoriteCarList(favList);
  }, []);

  return (
    <div>
      <CarsList cars={favoriteCarList} />
    </div>
  );
};

export default FavoritePage;