import {
  CarImg,
  Wrapper,
  Header,
  Description,
  Title,
  Text,
  RentalInfo,
  RentalText,
  CallBtn,
} from './PopUpCard.styled';

const PopUpCard = ({ characteristics }) => {
  const {
    id,
    img,
    make,
    year,
    description,
    engineSize,
    rentalPrice,
    accessories,
    functionalities,
    fuelConsumption,
    model,
    rentalConditions,
    type,
    mileage,
    address,
  } = characteristics;

  const addressArr = address.split(',');
  const rental = rentalConditions.split('\n');
  const age = rental[0].split(':');
  const carAccessories = accessories.join(' | ');
  const carFunctionalities = functionalities.join(' | ');

  return (
    <>
      <CarImg src={img} alt="car" />
      <div>
        <Wrapper>
          <Header>
            {make} <span>{model}</span>, {year}
          </Header>
          <Text>
            {addressArr[1]} | {addressArr[2]} | Id: {id} | Year: {year} | Type:{' '}
            {type}
          </Text>
          <Text>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </Text>
          <Description>{description}</Description>
        </Wrapper>
        <Wrapper>
          <Title>Accessories and functionalities:</Title>
          <Text>{carAccessories}</Text>
          <Text>{carFunctionalities}</Text>
        </Wrapper>
        <Wrapper>
          <Title>Rental Conditions:</Title>
          <RentalInfo>
            <RentalText>
              Minimum age : <span>{age[1]}</span>
            </RentalText>
            <RentalText>{rental[1]}</RentalText>
          </RentalInfo>
          <RentalInfo>
            <RentalText>{rental[2]}</RentalText>
            <RentalText>
              Mileage: <span>{mileage.toLocaleString('en-IN')}</span>
            </RentalText>
            <RentalText>
              Price: <span>{rentalPrice}</span>
            </RentalText>
          </RentalInfo>
        </Wrapper>
      </div>

      <CallBtn href="tel:+380730000000">Rental car</CallBtn>
    </>
  );
};

export default PopUpCard;
