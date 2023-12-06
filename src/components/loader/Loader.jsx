import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer, LoaderHeader } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <LoaderHeader>Wait a minute...</LoaderHeader>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#0b44cd"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  </LoaderContainer>
);

export default Loader;
