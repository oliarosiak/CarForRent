import {
  Container,
  TextWrapper,
  CoverImg,
  Title,
  Text,
  LinkToCatalog
} from './HomeScreen.styled';

import coverPic from '../../images/rent-a-car.jpg';

const HomeScreen = () => {
  return (
    <Container>
      <TextWrapper>
        <Title> Car For Rent</Title>
        <Text>Here you can order a car for rent.</Text>
        <Text>We have cars for every taste and wallet!</Text>
        <Text>&#8226; Quickly and qualitatively</Text>
        <Text>&#8226; At an acceptable price</Text>
        <LinkToCatalog to="/catalog">Choose auto</LinkToCatalog>
      </TextWrapper>
      <CoverImg src={coverPic} alt="cover car" />
    </Container>
  );
};

export default HomeScreen;
