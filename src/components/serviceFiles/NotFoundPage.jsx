import { Wrapper, Text, LinkTo } from './ServiceFiles.styled';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Text>Sorry, something went wrong! 😔</Text>
      <Text>Such a page does not exist!</Text>
      <LinkTo to="/">Go to the main page</LinkTo>
    </Wrapper>
  );
};

export default NotFoundPage;
