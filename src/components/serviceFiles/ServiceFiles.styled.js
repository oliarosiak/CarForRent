import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  text-align: center;
`;

export const Text = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  text-decoration: underline;
`;

export const LinkTo = styled(Link)`
  color: #3470ff;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  margin-top: 25px;

  &:hover {
    color: #0b44cd;
  }
`;
