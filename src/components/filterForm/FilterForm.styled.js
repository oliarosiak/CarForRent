import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
export const FormEl = styled.form`
  display: flex;
  align-items: flex-end;
`;

export const FormSelectLabel = styled.label`
  width: 224px;
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  color: var(--text-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding-left: 18px;
  border-radius: var(--radius-l);
  border: none;
  outline: none;
  background-color: var(--filter-bcg-color);
  font-family: var(--manrope);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black-text-color);

  & > option {
    background-color: var(--white-color);
    color: var(--filter-list-color);
  }
`;

export const FormLabel = styled.label`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  color: var(--text-color);
  font-family: var(--manrope);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
`;

export const ScaleWrap = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 0 14px 24px;
  font-family: var(--manrope);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: var(--black-text-color);
  border: none;
  outline: none;
  background-color: var(--filter-bcg-color);
  border-radius: 0 var(--radius-l) var(--radius-l) 0;

  &:not(:last-child) {
    border-right: var(--border-line);
    border-radius: var(--radius-l) 0px 0px var(--radius-l);
  }
`;

export const FormBtn = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px, 44px, 14px, 44px;
  border-radius: var(--radius-m);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--main-accent-color);
  color: var(--white-color);
  font-family: var(--manrope);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  &:hover,
  &:focus {
    background-color: var(--second-accent-color);
  }
`;
