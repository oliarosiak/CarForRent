import styled from '@emotion/styled';

export const CarsListWrapper = styled.ul` 
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  justify-content: center;

  @media screen and (min-width: 320px) {
    width: 300px;
    margin: 0 auto 10px;
  }
  @media screen and (min-width: 890px) {
    width: 880px;
    margin: 0 auto 15px;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    margin: 0 auto 50px;
  }
`;
