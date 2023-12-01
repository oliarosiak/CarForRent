import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 12px;
  background: var(--bcg-gradient);

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

export const Main = styled.main`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 300px;    
  }
  @media screen and (min-width: 890px) {
    width: 880px;    
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;    
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
    color: var(--white-color);
    cursor: pointer;
    &.active {
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;
