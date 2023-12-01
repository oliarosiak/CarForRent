import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;

  @media screen and (min-width: 320px) {
    width: 300px;
    flex-direction: column;
  }
  @media screen and (min-width: 890px) {
    width: 880px;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CoverImg = styled.img`
  border-radius: var(--radius-l);
`;

export const TextWrapper = styled.div`
  text-align: center;
  background: var(--bcg-gradient);
  border-radius: var(--radius-l);
  color: var(--main-accent-color);
  font-weight: 600;

  @media screen and (min-width: 320px) {
    margin-bottom: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 890px) {
    margin-bottom: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    margin-right: 15px;
    padding: 100px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  color: var(--white-color);
  font-size: 20px;
  line-height: 1.5;
`;

export const LinkToCatalog = styled(Link)`
  display: inline-block;
  padding: 5px 15px;
  color: var(--main-accent-color);
  font-family: var(--manrope);
  cursor: pointer;
  background-color: var(--filter-list-color);
  border-radius: var(--radius-m);
  border: var(--border-line);
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;

  &:hover {
    color: var(--second-accent-color);
    background-color: var(--filter-bcg-color);
  }
`;
