import { Wrapper, Text, ReturnText, LinkTo } from './ServiceFiles.styled';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Text>Sorry, something went wrong! 😔</Text>
      <Text>Such a page does not exist!</Text>
      <ReturnText>
        Return to the <LinkTo to="/">Main page</LinkTo>
      </ReturnText>
    </Wrapper>
  );
};

export default NotFoundPage;
