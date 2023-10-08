import CarItem from 'components/carItem/CarItem';

import { CarsListWrapper } from './CarsList.styled';

const CarsList = ({ cars }) => { 
  return (
    <CarsListWrapper>
      {cars.map(car => (
        <CarItem key={car.id} carData={car} />
      ))}
    </CarsListWrapper>
  );
};

export default CarsList;
