import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 128px 150px;
`;

export const Header = styled.header`
  padding: 30px 0;
  margin-bottom: 25px;
  border-radius: 12px;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-weight: 700;
  font-size: 25px;
  line-height: 1.5;
  & > a {
    color: #ffffff;
    cursor: pointer;
    &.active {
      color: #3470ff;
    }
  }
`;
