import { Container } from './App.styled';

import Header from './header/header';
import Dushboard from './dushboard/dushboardPage';

export const App = () => {
  return (
    <Container>
      <Header />
      <Dushboard />
    </Container>
  );
};
