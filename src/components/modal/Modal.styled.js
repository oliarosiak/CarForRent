import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const CarInfoCard = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 541px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
`;

export const CloseButtonImg = styled.img`
  width: 24px;
  height: 24px;
  background: #ffffff;
`;
