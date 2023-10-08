import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0;
  color: #3470ff;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  text-align: center;
  cursor: pointer;

  &:disabled {
    color: #0b44cd;
    cursor: not-allowed;
  }
`;
