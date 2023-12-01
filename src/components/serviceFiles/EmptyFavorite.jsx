import { Wrapper, Text, ReturnText, LinkTo } from './ServiceFiles.styled';

const EmptyFavorite = () => {
  return (
    <Wrapper>
      <Text>Sorry, you haven't favorite adverts yet</Text>
      <ReturnText>
        Return to the <LinkTo to="/catalog">catalog</LinkTo> to choose a car
      </ReturnText>
    </Wrapper>
  );
};

export default EmptyFavorite;
