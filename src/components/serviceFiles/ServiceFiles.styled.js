import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--radius-m);
  background: var(--bcg-gradient);
  text-align: center;

  @media screen and (min-width: 320px) {
    width: 250px;
    padding: 50px 15px;
  }
  @media screen and (min-width: 890px) {
    width: 600px;
    padding: 100px 0;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 25px;
`;

export const ReturnText = styled.p`
  color: var(--white-color);
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
`;

export const LinkTo = styled(Link)`
  display: inline-block;
  color: var(--main-accent-color);
  font-family: var(--manrope);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--second-accent-color);
  }
`;
