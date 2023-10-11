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

const carsBrands = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

const FilterForm = ({ onSubmit }) => {
  const submitHeandler = event => {
    event.preventDefault();
    onSubmit(event.target);
  };

  return (
    <Wrapper>
      <FormEl onSubmit={submitHeandler}>
        <FormSelectLabel htmlFor="car-brand">
          Car brand
          <FormSelect id="car-brand" name="brand">
            {carsBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
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
            <FormInput id="mileage-km" name="min"></FormInput>
            <FormInput id="mileage-km" name="max"></FormInput>
          </ScaleWrap>
        </FormLabel>
        <FormBtn type="submit">Search</FormBtn>
      </FormEl>
    </Wrapper>
  );
};

export default FilterForm;
