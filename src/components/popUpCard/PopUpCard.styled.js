import styled from '@emotion/styled';

export const CarImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-l);
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Wrapper = styled.div`
  font-family: var(--manrope);
  margin-bottom: 24px;
`;

export const Header = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--black-text-color);

  & > span {
    color: var(--main-accent-color);
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: var(--black-text-color);
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--black-text-color);
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--subtext-color);
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const RentalInfo = styled.p`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 890px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const RentalText = styled.span`
  padding: 7px 14px;
  font-family: var(--montserrat);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--second-subtext-color);
  background-color: var(--modal-text-bcg-color);
  border-radius: var(--radius-xxl);

  @media screen and (min-width: 320px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 890px) {
    &:not(:last-child) {
      margin-right: 8px;
      margin-bottom: 0;
    }
  }

  & > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--main-accent-color);
  }
`;

export const CallBtn = styled.a`
  display: inline-block;
  border-radius: var(--radius-m);
  padding: 12px 50px;
  font-family: var(--manrope);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: var(--main-accent-color);
  color: var(--white-color);

  &:hover,
  &:focus {
    background-color: var(--second-accent-color);
  }
`;
