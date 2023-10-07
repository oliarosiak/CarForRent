import {
  CarBlock,
  CarImg,
  HeaderWrapper,
  ContentWrapper,
  CarButton,
} from './CarItem.styled';

const CarItem = ({ carData }) => {
  const {
    img,
    make,
    year,
    rentalPrice,
    model,
    rentalCompany,
    type,
    mileage,
    address,
  } = carData;

  const adress = address.split(',');
  const city = adress[1];
  const country = adress[2];

  console.log(carData);

  return (
    <CarBlock>
      <CarImg src={img} alt="car" />
      <HeaderWrapper>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </HeaderWrapper>
      <ContentWrapper>
        <span>
          {city} | {country} | {rentalCompany}
        </span>
        <span>
          {type} | {make} | {mileage} | Apple CarPlay
        </span>
      </ContentWrapper>
      <CarButton>Learn more</CarButton>
    </CarBlock>
  );
};

export default CarItem;
