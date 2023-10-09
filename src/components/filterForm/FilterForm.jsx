import {
  Wrapper,
  FormEl,
  FormSelectLabel,
  FormLabel,
  FormSelect,
  ScaleWrap,
  FormInput,
  FormBtn,
} from './FilterForm.styled';

const FilterForm = () => {
  const submitHeandler = event => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <FormEl onSubmit={submitHeandler}>
        <FormSelectLabel htmlFor="car-brand">
          Car brand
          <FormSelect id="car-brand" name="brand">
            <option value="buick">buick</option>
            <option value="volvo">volvo</option>
            <option value="hummer">hummer</option>
            <option value="Subaru">Subaru</option>
          </FormSelect>
        </FormSelectLabel>
        <FormSelectLabel htmlFor="price-hour">
          Price/ 1 hour
          <FormSelect id="price-hour" name="price">
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
          </FormSelect>
        </FormSelectLabel>
        <FormLabel htmlFor="mileage-km">
          {' '}
          Сar mileage / km
          <ScaleWrap>
            <FormInput id="mileage-km"></FormInput>
            <FormInput id="mileage-km"></FormInput>
          </ScaleWrap>
        </FormLabel>
        <FormBtn type="submit">Search</FormBtn>
      </FormEl>
    </Wrapper>
  );
};

export default FilterForm;
