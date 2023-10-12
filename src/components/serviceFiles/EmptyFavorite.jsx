import { Wrapper, Text, LinkTo } from './ServiceFiles.styled';

const EmptyFavorite = () => {
  return (
    <Wrapper>
      <Text>Sorry, you haven't favorite adverts yet</Text>
      <LinkTo to="/catalog">Return to the catalog to choose a car</LinkTo>
    </Wrapper>
  );
};

export default EmptyFavorite;
