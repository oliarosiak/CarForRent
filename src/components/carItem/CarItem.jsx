import { useState } from 'react';
import Modal from 'components/modal/Modal';
import {
  CarBlock,
  FavoriteBtn,
  FavoriteBtnImg,
  CarImg,
  HeaderWrapper,
  ContentWrapper,
  CarButton,
} from './CarItem.styled';
import heartPic from '../../images/heart.svg';
import heartFavorite from '../../images/heart-favorite.svg';

const CarItem = ({ carData }) => {
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const toggleFavorite = () => {
    setFavorite(favorite => !favorite);
  };

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

  const favPic = favorite ? heartFavorite : heartPic;

  return (
    <CarBlock>
      <FavoriteBtn onClick={toggleFavorite}>
        <FavoriteBtnImg src={favPic} alt="add to favorite" />
      </FavoriteBtn>
      <CarImg src={img} alt="car" fill="none" />
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
      <CarButton onClick={toggleModal}>Learn more</CarButton>

      {showModal && <Modal onCloseModal={toggleModal} info={carData} />}
    </CarBlock>
  );
};

export default CarItem;
