import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1184px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const CoverImg = styled.img`
  border-radius: var(--radius-l);
`;

export const TextWrapper = styled.div`
  width: 600px;
  padding: 100px 30px;
  text-align: center;
  background: var(--bcg-gradient);
  border-radius: var(--radius-l);
  color: var(--main-accent-color);
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  color: var(--white-color);
  font-size: 20px;
  line-height: 1.5;
`;
