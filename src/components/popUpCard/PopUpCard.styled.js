import styled from '@emotion/styled';

export const CarImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
`;

export const Header = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: #121417;

  & > span {
    color: #3470ff;
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const RentalInfo = styled.p`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const RentalText = styled.span`
  padding: 7px 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    color: #3470ff;
  }
`;

export const CallBtn = styled.a`
  display: inline-block;
  border-radius: 12px;
  padding: 12px 50px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: #3470ff;
  color: #ffffff;
`;
