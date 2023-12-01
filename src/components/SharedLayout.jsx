import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Main, Navigation } from './SharedLayout.styled.js';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Navigation>
      </Header>

      <Main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default SharedLayout;
