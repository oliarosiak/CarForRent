import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modal-overlay-color);
  z-index: 1200;
`;

export const CarInfoCard = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: var(--white-color);
  border-radius: var(--radius-xl);

  @media screen and (min-width: 320px) {
    width: 260px;
    padding: 40px 5px 20px 5px;  
  }
  @media screen and (min-width: 890px) {
    width: 541px;
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const CloseButtonImg = styled.img`
  width: 24px;
  height: 24px;
  background: var(--white-color);
`;
