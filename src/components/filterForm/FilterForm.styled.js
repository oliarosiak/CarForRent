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
  color: #8a8a89;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  /* padding: 14px 160px 14px 18px; */
  padding-left: 18px;
  border-radius: 14px;
  border: none;
  outline: none;

  background-color: #f7f7fb;

  /* font-family: Manrope; */
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

export const FormLabel = styled.label`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  color: #8a8a89;

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

  /* font-family: Manrope; */
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: #121417;

  border: none;
  outline: none;
  background-color: #f7f7fb;
  border-radius: 0 14px 14px 0;

  &:not(:last-child) {
    border-right: 1px solid #8a8a8933;
    border-radius: 14px 0px 0px 14px;
  }
`;

export const FormBtn = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px, 44px, 14px, 44px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #3470ff;
  color: #ffffff;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
`;
