import { useState } from 'react';
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

const FilterForm = ({ onSubmit, carPriceList }) => {
  const [defaultBrand, setDefaultBrand] = useState('');
  const [defaultPrice, setDefaultPrice] = useState('');
  const [defaultMinMile, setDefaultMinMile] = useState('');
  const [defaultMaxMile, setDefaultMaxMile] = useState('');

  const onBrandHandler = event => {
    setDefaultBrand(event.target.value);
  };

  const onPriceHandler = event => {
    setDefaultPrice(event.target.value);
  };
  const onMinMileHandler = event => {
    setDefaultMinMile(event.target.value);
  };
  const onMaxMileHandler = event => {
    setDefaultMaxMile(event.target.value);
  };

  const submitHeandler = event => {
    event.preventDefault();
    onSubmit(defaultBrand, defaultPrice, defaultMinMile, defaultMaxMile);
    setDefaultBrand('');
    setDefaultPrice('');
    setDefaultMinMile('');
    setDefaultMaxMile('');
  };

  const resetHendler = event => {
    event.preventDefault();
    onSubmit(defaultBrand, defaultPrice, defaultMinMile, defaultMaxMile);
  };

  return (
    <Wrapper>
      <FormEl onSubmit={submitHeandler}>
        <FormSelectLabel htmlFor="car-brand">
          Car brand
          <FormSelect
            id="car-brand"
            name="brand"
            value={defaultBrand}
            onChange={onBrandHandler}
          >
            {carsBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </FormSelect>
        </FormSelectLabel>
        <FormSelectLabel htmlFor="price-hour">
          Price/ 1 hour
          <FormSelect
            id="price-hour"
            name="price"
            value={defaultPrice}
            onChange={onPriceHandler}
          >
            {carPriceList.map(price => (
              <option key={price} value={price}>
                To {price}$
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
              value={defaultMinMile}
              onChange={onMinMileHandler}
            ></FormInput>
            <FormInput
              id="mileage-km"
              name="max"
              type="number"
              value={defaultMaxMile}
              onChange={onMaxMileHandler}
            ></FormInput>
          </ScaleWrap>
        </FormLabel>
        <FormBtn type="submit">Search</FormBtn>
      </FormEl>
      <FormEl onSubmit={resetHendler} style={{ paddingLeft: '3px' }}>
        <FormBtn type="submit" style={{ backgroundColor: '#0b44cd' }}>
          Reset
        </FormBtn>
      </FormEl>
    </Wrapper>
  );
};

export default FilterForm;
