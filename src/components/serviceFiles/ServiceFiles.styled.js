import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--radius-m);
  background: var(--bcg-gradient);
  text-align: center;
`;

export const Text = styled.p`
  color: var(--white-color);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  text-decoration: underline;
`;

export const LinkTo = styled(Link)`
  color: var(--main-accent-color);
  font-family: var(--manrope);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 25px;

  &:hover {
    color: var(--second-accent-color);
  }
`;
