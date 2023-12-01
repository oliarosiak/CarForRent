import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 890px) {
    width: 880px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;  
  }
`;

export const Header = styled.header`
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 12px;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);

  @media screen and (min-width: 320px) {
    width: 300px;
    padding: 10px 0;
  }
  @media screen and (min-width: 890px) {
    width: 880px;
    padding: 20px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    padding: 30px 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 700;
  line-height: 1.5;
  @media screen and (min-width: 320px) {
    font-size: 20px;
  }
  @media screen and (min-width: 890px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }

  & > a {
    color: #ffffff;
    cursor: pointer;
    &.active {
      color: #3470ff;
    }
  }
`;
