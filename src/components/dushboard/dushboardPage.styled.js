import styled from '@emotion/styled';

/**
 * #050505 - black main
 * #0F0F0F - header
 * #FFFFFF - white
 */

export const DushboardContainer = styled.div`
  width: 0 auto;
  padding: 0 34px;
`;

export const HeaderBlock = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainHeader = styled.h2`
  margin: 0;
  padding-top: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
`;

export const SecondHeader = styled.h2`
  margin: 0;
  padding-top: 24px;
  font-weight: 500;
  font-size: 18px;
`;

export const ChartsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const Charts = styled.div`
  width: 676px;
  height: 382px;
  padding: 25px 20px 24px 14px;
  background-color: #0f0f0f;
  border-radius: 12px;
  margin-right: 20px;
`;
