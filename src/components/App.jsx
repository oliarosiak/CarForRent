import { Container } from './App.styled';

import Header from './header/header';
import Dashboard from './dashboard/dashboard';

export const App = () => {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
};
