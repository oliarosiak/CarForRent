import { useState } from 'react';
import Modal from 'components/modal/Modal';
import {
  CarBlock,
  FavoriteBtn,
  FavoriteBtnImg,
  CarImg,
  HeaderWrapper,
  ContentWrapper,
  LearnMoreBtn,
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
    id,
    img,
    make,
    year,
    rentalPrice,
    model,
    rentalCompany,
    type,
    address,
  } = carData;

  const addressArr = address.split(',');
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
          {addressArr[1]} | {addressArr[2]} | {rentalCompany}
        </span>
        <span>
          {type} | {make} | {id} | Apple CarPlay
        </span>
      </ContentWrapper>
      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>

      {showModal && <Modal onCloseModal={toggleModal} info={carData} />}
    </CarBlock>
  );
};

export default CarItem;
