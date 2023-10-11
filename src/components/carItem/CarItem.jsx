import { useState, useEffect } from 'react';
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
  const [isFavorite, setIsFavorite] = useState(false);

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

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem('fav')) || [];
    const isFav = favList.some(fav => fav.id === id);
    setIsFavorite(isFav);
  }, [id]);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const toggleFavorite = () => {
    if (!isFavorite) {
      const favList = JSON.parse(localStorage.getItem('fav')) || [];
      favList.push(carData);
      localStorage.setItem('fav', JSON.stringify(favList));
    } else {
      const favList = JSON.parse(localStorage.getItem('fav')) || [];
      const removeFromFav = favList.filter(fav => fav.id !== id);
      localStorage.setItem('fav', JSON.stringify(removeFromFav));
    }
    setIsFavorite(favorite => !favorite);
  };

  const addressArr = address.split(',');
  const favPic = isFavorite ? heartFavorite : heartPic;

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
