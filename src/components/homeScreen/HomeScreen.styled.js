import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CoverImg = styled.img`
  border-radius: 12px;
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 600px;
  padding: 100px 30px;
  text-align: center;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  border-radius: 12px;
  color: #3470ff;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  color: #ffffff;
  font-size: 20px;
  line-height: 1.5;
`;
