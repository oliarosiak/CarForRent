import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 890px) {
    flex-direction: row;
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-end;
    margin-bottom: 50px;
  }
`;
export const FormEl = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 320px) {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 890px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const FormSelectLabel = styled.label`
  width: 224px;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 320px) {
    margin-right: 0;
  }
  @media screen and (min-width: 890px) {
    margin-right: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
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
  color: var(--text-color);
  font-family: var(--manrope);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 320px) {
    margin-right: 0;
  }
  @media screen and (min-width: 890px) {
    margin-right: 18px;
  }
`;

export const ScaleWrap = styled.div`
  display: flex;
  margin-top: 8px;

  @media screen and (min-width: 320px) {
    margin-bottom: 5px;
  }
  @media screen and (min-width: 890px) {
    margin-bottom: 0;
  }
`;

export const FormInput = styled.input`
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  &[type='number'],
  &[type='number']:hover,
  &[type='number']:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  position: relative;
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
  &:hover {
    background-color: var(--second-accent-color);
  }
`;
