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

const FilterForm = ({ onSubmit, carPriceList, min, max }) => {
  const submitHeandler = event => {
    event.preventDefault();
    onSubmit(event.target);
  };

  return (
    <Wrapper>
      <FormEl onSubmit={submitHeandler}>
        <FormSelectLabel htmlFor="car-brand">
          Car brand
          <FormSelect id="car-brand" name="brand" required>
            {carsBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </FormSelect>
        </FormSelectLabel>
        <FormSelectLabel htmlFor="price-hour">
          Price/ 1 hour
          <FormSelect id="price-hour" name="price" required>
            {carPriceList.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </FormSelect>
        </FormSelectLabel>
        <FormLabel htmlFor="mileage-km">
          {' '}
          Сar mileage / km
          <ScaleWrap>
            <FormInput
              id="mileage-km"
              name="min"
              type="number"
              min={min}
              max={max}
              required
            ></FormInput>
            <FormInput
              id="mileage-km"
              name="max"
              type="number"
              min={min}
              max={max}
              required
            ></FormInput>
          </ScaleWrap>
        </FormLabel>
        <FormBtn type="submit">Search</FormBtn>
      </FormEl>
    </Wrapper>
  );
};

export default FilterForm;
