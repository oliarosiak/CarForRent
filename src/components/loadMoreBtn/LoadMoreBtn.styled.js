import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0;
  color: var(--main-accent-color);
  text-decoration: underline;
  border: none;
  background-color: transparent;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--second-accent-color);
  }

  &:disabled {
    color: var(--second-accent-color);
    cursor: not-allowed;
  }
`;
